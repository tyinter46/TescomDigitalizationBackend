import { MongoClient } from 'mongodb';
import { esClient } from '../config/elasticsearch';

// Environment variables for tuning
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '500', 10);
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '2', 10); // Parallel batches
const MAX_RETRIES = 3;
const RETRY_BACKOFF_MS = 1000; // Initial delay for retries

let hasImported = false;

export default async function importUsers() {
  if (hasImported) {
    console.log('ℹ️ Import already completed, skipping');
    return;
  }

  let mongoClient: MongoClient | null = null;
  let totalIndexed = 0;

  try {
    // Connect to MongoDB
    mongoClient = new MongoClient(process.env.MONGO_DB_URI!, {
      maxPoolSize: 10, // Limit connections for free-tier resource constraints
    });
    await mongoClient.connect();
    console.log('✅ Connected to MongoDB');
    const db = mongoClient.db('test'); // Replace with your DB name
    const collection = db.collection('users');

    // Ensure Elasticsearch index exists with correct mapping
    const indexExists = await esClient.indices.exists({ index: 'users' });
    if (!indexExists) {
      await esClient.indices.create({
        index: 'users',
        mappings: {
          properties: {
            id: { type: 'keyword' }, // Store MongoDB _id as 'id'
            dateOfFirstAppointment: { type: 'date' },
            dateOfPresentSchoolPosting: { type: 'date' },
            // Add other fields, e.g., name: { type: 'text' }
          },
        },
      });
      console.log('✅ Created users index in Elasticsearch');
    }

    // Stream users to avoid loading all into memory
    const cursor = collection.find().batchSize(BATCH_SIZE);
    const totalUsers = await collection.countDocuments();
    if (totalUsers === 0) {
      console.log('⚠️ No users found in MongoDB');
      return;
    }
    console.log(`ℹ️ Found ${totalUsers} users in MongoDB`);

    // Process batches
    let batch: any[] = [];
    let batchNumber = 0;

    // Async retry function for bulk indexing
    const indexBatch = async (batch: any[], attempt = 1): Promise<number> => {
      const body = batch.flatMap((doc) => {
        const { _id, ...rest } = doc;
        return [
          { index: { _index: 'users', _id: _id?.toString() } },
          {
            id: _id?.toString(), // Store _id as 'id' in document payload
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
            `❌ Batch ${batchNumber} failed for ${erroredDocs.length} docs:`,
            erroredDocs
          );
          return batch.length - erroredDocs.length; // Count successful docs
        }
        console.log(`✅ Batch ${batchNumber} indexed (${batch.length} users)`);
        return batch.length;
      } catch (error: any) {
        if (attempt <= MAX_RETRIES) {
          console.warn(
            `⚠️ Batch ${batchNumber} failed (attempt ${attempt}/${MAX_RETRIES}): ${error.message}. Retrying in ${RETRY_BACKOFF_MS * attempt}ms...`
          );
          await new Promise((resolve) => setTimeout(resolve, RETRY_BACKOFF_MS * attempt));
          return indexBatch(batch, attempt + 1);
        }
        console.error(`❌ Batch ${batchNumber} failed after ${MAX_RETRIES} retries:`, error.message);
        return 0; // Count as failed
      }
    };

    // Process batches with controlled concurrency
    const batchPromises: Promise<number>[] = [];
    for await (const doc of cursor) {
      batch.push(doc);
      if (batch.length >= BATCH_SIZE) {
        batchNumber++;
        batchPromises.push(indexBatch(batch));
        batch = [];
        // Limit concurrency
        if (batchPromises.length >= CONCURRENCY) {
          totalIndexed += (await Promise.all(batchPromises)).reduce((sum, count) => sum + count, 0);
          batchPromises.length = 0; // Clear processed promises
        }
      }
    }

    // Process remaining batch
    if (batch.length > 0) {
      batchNumber++;
      batchPromises.push(indexBatch(batch));
    }

    // Wait for all remaining batches
    totalIndexed += (await Promise.all(batchPromises)).reduce((sum, count) => sum + count, 0);

    console.log(`🎉 Finished indexing. Total users indexed: ${totalIndexed}/${totalUsers}`);
    hasImported = true;
  } catch (error) {
    console.error('❌ Import failed:', error);
  } finally {
    if (mongoClient) {
      await mongoClient.close();
      console.log('✅ MongoDB connection closed');
    }
  }
}