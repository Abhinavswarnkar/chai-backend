import mongoose from "mongoose";

import { DB_Name } from "../constants.js";

const connectDB = async ()=>{
  try {
    console.log(`${process.env.MONGODB_URI}`)
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
    console.log(`MONGODB CONNECTED !! DB_HOST ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MongoDB connection error",error) ;
    process.exit(1) ;
  }
}

export default connectDB;