import {MongoClient} from 'mongodb' 

import enviroment from '../../enviroment';
import ExistingStaff from './schema';
import logger from '../../config/logger';



export default class ExistingStaffService {


    private url : string ='mongodb://127.0.0.1:27017'
    private dbName : string = enviroment.getDbName()
    public client: MongoClient = new MongoClient(this.url)
    
  public async  getAllStaff() {
    // ExistingStaff.paginate(query, options, callback);
    
    await this.client.connect()
    const db = this.client.db(this.dbName)
    const collection = db.collection('existingStaff')
    const existingStaff = await collection.find().toArray()
    logger.info(existingStaff)
    return existingStaff

       
  }

  public filterStaff(query: any, callback: any) {
    ExistingStaff.findOne(query, callback);
  }
}

