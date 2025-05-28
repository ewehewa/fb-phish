import mongoose from "mongoose";

const connectDb = async ()=>{
  try{
    await mongoose.connect(process.env.DB_URI);
    console.log("database connected");
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}

export default connectDb;



