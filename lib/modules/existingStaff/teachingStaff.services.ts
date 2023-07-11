// import mongoose, { connection } from "mongoose";
// import config from 'config'
// // import {MongoClient} from 'mongodb'
// import PreexistingTeachingStaffModel from "../models/preexistingTeachers.model";

// const url =config.get<string>("dbUri")
// // const client = new MongoClient(url)
// // const dbName = "teachingStaffFromCaps"

// export const getPreexistingTeachingStaff = async ()=>{
// try {
//     // await client.connect()
//     // const db = client.db(dbName)
//     // const collection = db.collection('teachingStaff')
//     // const existingTeachingStaff =  collection.find({}).toArray((err,data)=>{
//     //     if (err) console.log(err.message)
//     //    // collection.drop()
//     //    console.log(data)
//     //   console.log()
//     // })
//     // return existingTeachingStaff

//     const existingStaff = await PreexistingTeachingStaffModel.find({})

//     return console.log(existingStaff)

// } catch (error:any) {
//     console.error(error.message)
//     }
// }
