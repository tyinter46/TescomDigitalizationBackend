import { MongoClient } from 'mongodb';
import { esClient } from '../config/elasticsearch';

// Environment variables for tuning
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '500', 10);
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '2', 10);
const MAX_RETRIES = 3;
const RETRY_BACKOFF_MS = 1000;
const ES_READY_TIMEOUT = 30000; // 30 seconds to wait for ES

let hasImported = false;

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

export default async function importUsers() {
  if (hasImported) {
    console.log('ℹ️ Import already completed, skipping');
    return;
  }

  let mongoClient: MongoClient | null = null;
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
       return console.log('ℹ️ Users index already exists');
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
  } catch (error: any) {
    console.error('❌ Import failed:', error.message);
    // Don't throw - let the server continue running
  } finally {
    if (mongoClient) {
      await mongoClient.close();
      console.log('✅ MongoDB connection closed');
    }
  }
}