import mongoose from "mongoose";
import { DB_URI } from "../config/env.config.js"

const connectDb = async ()=>{
  try{
    await mongoose.connect(DB_URI);
    console.log("database connected");
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}

export default connectDb;



