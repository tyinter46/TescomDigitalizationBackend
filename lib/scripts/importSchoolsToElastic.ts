import {MongoClient} from 'mongodb'
import {esClient} from '../config/elasticsearch'
import { mongo } from 'mongoose';
  
const BATCH_SIZE = parseInt(process.env.SCHOOL_BATCH_SIZE || '50', 10)
const concurrency = parseInt(process.env.CONCURRENCY || '2', 10)
const MAX_RETRIES = 3;
const RETRY_BACKOFF_MS = 1000;

let hasImported = false;

export default async function importSchoolsToElastic (){
if (hasImported) {
    console.log('Schools Import already completed, skipping');
    return;
  }

let mongoClient: MongoClient | null = null
let totalIndexed = 0
 try {
    mongoClient = new MongoClient(process.env.MONGO_DB_URI!, {
        maxPoolSize: 10
    })
    await mongoClient.connect()
    console.log('connected to mongodb for schools')
    const db = mongoClient.db('text')
    const collection = db.collection('schools')
    
    
    const indexExists = await esClient.indices.exists({index: 'schools'})
    if (!indexExists){
        await esClient.indices.create({
            index: 'schools',
            mappings: {
               properties: {
      id: { "type": "keyword" },
      nameOfSchool: { "type": "text", "fields": { "keyword": { "type": "keyword" } } },
      location: { "type": "text" },
      category: { "type": "keyword" },
      zone: { "type": "keyword" },
      address: { "type": "text" },
      division: { "type": "keyword" },
      listOfStaff: { "type": "keyword" },
      principal: { "type": "keyword" },
      vicePrincipalAdmin: { "type": "keyword" },
      vicePrincipalAcademics: { "type": "keyword" },
      latitude: { "type": "float" },
      longitude: { "type": "float" }
    
            },
        },


        })
        console.log('Created schools index in Elasticsearch')
   

        const cursor = collection.find().batchSize(BATCH_SIZE);
        const totalSchools = await collection.countDocuments()
        if (totalSchools === 0 ){
            console.log('no schools found in Mongo DB')
            return
        }
        console.log(`Found ${totalSchools} schools in MongoDb`)



        //bach processing 
        let batch :any [] = [];
        let batchNumber = 0

        const indexBatch = async (batch: any[], attempt = 1): Promise<number> =>{
            const body = batch.flatMap((doc)=>{
                const {_id, ...rest} = doc;
                return [
                    {index: {_index: 'schools', _id: _id?.toString()}},
                    {
                        id: _id?.toString(),
                        ...rest,

                    }

                ]
            })

            try {
                const bulkResponse = await esClient.bulk({refresh: true, body});
                if (bulkResponse.errors){
                    const erroredDocs = bulkResponse.items.filter((item: any) => item.index?.error)
                    .map((item:any)=>({
                        id: item.index._id,
                        error: item.index.error.reason,
                    }));
                    console.error ( `Batch ${batchNumber} failed for ${erroredDocs.length} docs:`,
                        erroredDocs)
                        return batch.length - erroredDocs.length;

                }
                console.log(`Batch ${batchNumber} indexed (${batch.length} users)`);
                 return batch.length
            } catch (error: any) {
                if (attempt <= MAX_RETRIES){
     console.warn (`Batch ${batchNumber} failed (attempt ${attempt}/${MAX_RETRIES}): ${error.message}. Retrying in ${RETRY_BACKOFF_MS * attempt}ms...`)
         await new Promise((resolve)=> setTimeout(resolve, RETRY_BACKOFF_MS * attempt))
         return indexBatch (batch, attempt + 1)
                }
                console.error(`Batch ${batchNumber} failed after ${MAX_RETRIES} retries:`, error.message);
                return 0
                
            }
        }

        const batchPromises: Promise <number>[] = [];
        for await (const doc of cursor ){
            batch.push(doc)
            if (batch.length >= BATCH_SIZE){
                batchNumber++
                batchPromises.push(indexBatch(batch))
                batch = []

                if (batchPromises.length >= concurrency){
                    totalIndexed += ((await Promise.all(batchPromises)).reduce((sum, count)=> sum + count, 0))
                    batchPromises.length = 0
                }
            }


        }

        if (batch.length > 0){
            batchNumber ++;
            batchPromises.push (indexBatch(batch))

        }
        totalIndexed += ((await Promise.all (batchPromises)).reduce((sum, count) => sum + count, 0))
        console.log(`Finished indeing. Total schools indexed : ${totalIndexed/totalSchools}`)
hasImported = true

    }
 } catch (error) {
    console.error('Import failed:', error);
 } finally {
    if (mongoClient){
        await mongoClient.close()
        console.log('MongoDB connection closed')
    }
 }

}
