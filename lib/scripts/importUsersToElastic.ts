import { MongoClient, ChangeStream } from 'mongodb';
import { esClient } from '../config/elasticsearch';

// Environment variables for tuning
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '500', 10);
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '2', 10);
const MAX_RETRIES = 3;
const RETRY_BACKOFF_MS = 1000;
const ES_READY_TIMEOUT = 30000; // 30 seconds to wait for ES

let hasImported = false;
let changeStream: ChangeStream | null = null;
let mongoClient: MongoClient | null = null;

// Wait for Elasticsearch to be ready
async function waitForElasticsearch(timeoutMs = ES_READY_TIMEOUT): Promise<void> {
  const startTime = Date.now();
  let lastError: Error | null = null;

  while (Date.now() - startTime < timeoutMs) {
    try {
      await esClient.info();
      console.log('✅ Elasticsearch is ready');
      return;
    } catch (err: any) {
      lastError = err;
      console.warn(`⚠️ Elasticsearch not ready yet: ${err.message}. Retrying...`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  throw new Error(
    `Elasticsearch not ready after ${timeoutMs}ms. Last error: ${lastError?.message}`
  );
}

// Handle individual document changes from MongoDB Change Stream
async function handleChange(change: any) {
  try {
    const { operationType, documentKey, fullDocument } = change;
    
    switch (operationType) {
      case 'insert':
      case 'replace':
      case 'update':
        // Index or update document in Elasticsearch
        const docToIndex = fullDocument || {};
        const { _id, ...rest } = docToIndex;
        
        await esClient.index({
          index: 'users',
          id: _id?.toString(),
          document: {
            id: _id?.toString(),
            ...rest,
            dateOfFirstAppointment: docToIndex.dateOfFirstAppointment
              ? new Date(docToIndex.dateOfFirstAppointment).toISOString()
              : undefined,
            dateOfPresentSchoolPosting: docToIndex.dateOfPresentSchoolPosting
              ? new Date(docToIndex.dateOfPresentSchoolPosting).toISOString()
              : undefined,
          },
          refresh: true,
        });
        console.log(`Synced ${operationType}: ${_id}`);
        break;
        
      case 'delete':
        // Delete document from Elasticsearch
        try {
          await esClient.delete({
            index: 'users',
            id: documentKey._id.toString(),
            refresh: true,
          });
          console.log(`✅ Synced delete: ${documentKey._id}`);
        } catch (err: any) {
          // Document might not exist in ES, ignore
          if (err.meta?.statusCode !== 404) {
            throw err;
          }
        }
        break;
        
      default:
        console.log(`ℹ️ Ignored operation: ${operationType}`);
    }
  } catch (error: any) {
    console.error('Error handling change (users):', error.message);
  }
}

// Start watching MongoDB changes
async function startChangeStreamSync() {
  if (!mongoClient) {
    console.error('❌ Cannot start change stream: MongoDB client not initialized');
    return;
  }
  
  if (changeStream) {
    console.log('ℹ️ Change stream already running');
    return;
  }
  
  try {
    const db = mongoClient.db('test');
    const collection = db.collection('users');
    
    // Watch for changes with full document on update
    changeStream = collection.watch([], { fullDocument: 'updateLookup' });
    
    console.log('Started watching MongoDB changes for real-time sync... in users');
    
    changeStream.on('change', handleChange);
    
    changeStream.on('error', (error) => {
      console.error('❌ Change stream error:', error);
      changeStream = null;
      
      // Attempt to reconnect after 5 seconds
      setTimeout(() => {
        console.log('🔄 Attempting to restart change stream...');
        startChangeStreamSync().catch(console.error);
      }, 5000);
    });
    
    changeStream.on('close', () => {
      console.log('ℹ️ Change stream closed');
      changeStream = null;
    });
    
  } catch (error: any) {
    console.error('Failed to start change stream:', error.message);
    console.warn('⚠️ Note: Change streams require MongoDB to run as a replica set');
  }
}

// Stop watching MongoDB changes
async function stopChangeStreamSync() {
  if (changeStream) {
    await changeStream.close();
    changeStream = null;
    console.log('✅ Stopped users change stream');
  }
}

export default async function importUsers() {
  if (hasImported) {
    console.log('ℹ️ Import already completed, skipping');
    return;
  }

  let totalIndexed = 0;

  try {
    // Wait for Elasticsearch to be ready before proceeding
    console.log('⏳ Waiting for Elasticsearch to be ready...');
    await waitForElasticsearch();

    // Connect to MongoDB
    console.log('⏳ Connecting to MongoDB...');
    mongoClient = new MongoClient(process.env.MONGO_DB_URI!, {
      maxPoolSize: 10,
    });
    await mongoClient.connect();
    console.log('✅ Connected to MongoDB');

    const db = mongoClient.db('test'); // Use your actual DB name
    const collection = db.collection('users');

    // Check if collection exists and has documents
    const totalUsers = await collection.countDocuments();
    if (totalUsers === 0) {
      console.log('⚠️ No users found in MongoDB, skipping import');
      hasImported = true;
      
      // Still start change stream to catch future inserts
      await startChangeStreamSync();
      return;
    }
    console.log(`ℹ️ Found ${totalUsers} users in MongoDB`);

    // Ensure Elasticsearch index exists with correct mapping
    try {
      const indexExists = await esClient.indices.exists({ index: 'users' });
      
      if (!indexExists) {
        console.log('📝 Creating Elasticsearch index...');
        await esClient.indices.create({
          index: 'users',
          settings: {
            number_of_shards: 1,
            number_of_replicas: 0,
          },
          mappings: {
            properties: {
              id: { type: 'keyword' },
              dateOfFirstAppointment: { type: 'date' },
              dateOfPresentSchoolPosting: { type: 'date' },
              // Add other fields as needed
            },
          },
        });
        console.log('✅ Created users index in Elasticsearch');
      } else {
        console.log('ℹ️ Users index already exists');
      }
    } catch (err: any) {
      // Index might already exist, continue
      console.warn(`⚠️ Index creation warning: ${err.message}`);
    }

    // Stream users to avoid loading all into memory
    const cursor = collection.find().batchSize(BATCH_SIZE);
    let batch: any[] = [];
    let batchNumber = 0;

    // Async retry function for bulk indexing
    const indexBatch = async (batch: any[], attempt = 1): Promise<number> => {
      const body = batch.flatMap((doc) => {
        const { _id, ...rest } = doc;
        return [
          { index: { _index: 'users', _id: _id?.toString() } },
          {
            id: _id?.toString(),
            ...rest,
            dateOfFirstAppointment: doc.dateOfFirstAppointment
              ? new Date(doc.dateOfFirstAppointment).toISOString()
              : undefined,
            dateOfPresentSchoolPosting: doc.dateOfPresentSchoolPosting
              ? new Date(doc.dateOfPresentSchoolPosting).toISOString()
              : undefined,
          },
        ];
      });

      try {
        const bulkResponse = await esClient.bulk({ refresh: true, body });
        
        if (bulkResponse.errors) {
          const erroredDocs = bulkResponse.items
            .filter((item: any) => item.index?.error)
            .map((item: any) => ({
              id: item.index._id,
              error: item.index.error.reason,
            }));
          console.error(
            `❌ Batch ${batchNumber} had errors for ${erroredDocs.length} docs:`,
            erroredDocs.slice(0, 3) // Log first 3 errors only
          );
          return batch.length - erroredDocs.length;
        }
        
        console.log(`✅ Batch ${batchNumber} indexed (${batch.length} users)`);
        return batch.length;
      } catch (error: any) {
        if (attempt <= MAX_RETRIES) {
          const delayMs = RETRY_BACKOFF_MS * attempt;
          console.warn(
            `⚠️ Batch ${batchNumber} failed (attempt ${attempt}/${MAX_RETRIES}): ${error.message}. Retrying in ${delayMs}ms...`
          );
          await new Promise((resolve) => setTimeout(resolve, delayMs));
          return indexBatch(batch, attempt + 1);
        }
        console.error(
          `❌ Batch ${batchNumber} failed after ${MAX_RETRIES} retries: ${error.message}`
        );
        return 0;
      }
    };

    // Process batches with controlled concurrency
    const batchPromises: Promise<number>[] = [];
    
    for await (const doc of cursor) {
      batch.push(doc);
      
      if (batch.length >= BATCH_SIZE) {
        batchNumber++;
        batchPromises.push(indexBatch([...batch])); // Clone batch
        batch = [];
        
        // Limit concurrency
        if (batchPromises.length >= CONCURRENCY) {
          const results = await Promise.all(batchPromises);
          totalIndexed += results.reduce((sum, count) => sum + count, 0);
          batchPromises.length = 0;
        }
      }
    }

    // Process remaining batch
    if (batch.length > 0) {
      batchNumber++;
      batchPromises.push(indexBatch(batch));
    }

    // Wait for all remaining batches
    const results = await Promise.all(batchPromises);
    totalIndexed += results.reduce((sum, count) => sum + count, 0);

    console.log(`🎉 Import completed! Total indexed: ${totalIndexed}/${totalUsers}`);
    hasImported = true;
    
    // Start real-time sync after initial import
    await startChangeStreamSync();
    
  } catch (error: any) {
    console.error('❌ Import failed:', error.message);
    // Don't throw - let the server continue running
  }
  // Note: MongoDB connection is kept open for change stream
}

// Export cleanup function for graceful shutdown
export async function cleanup() {
  console.log('⏳ Cleaning up MongoDB sync...');
  await stopChangeStreamSync();
  
  if (mongoClient) {
    await mongoClient.close();
    mongoClient = null;
    console.log('✅ MongoDB connection closed');
  }
}

// Call cleanup on process termination
process.on('SIGINT', async () => {
  await cleanup();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await cleanup();
  process.exit(0);
});