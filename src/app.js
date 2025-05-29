import express from "express";
import cors from "cors";
import { PORT } from "./config/env.config.js";
import authRoutes from "./routes/auth.routes.js";
import connectDb from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
  res.send("Hello world");
});

app.use(authRoutes);
app.use(errorHandler);


const startServer = async ()=>{
  try{
    await  connectDb();
    app.listen(PORT, ()=>{
      console.log(`app running at port ${PORT}`);
    })
  }catch(err){
    console.log(err, "Unable to start server");
  }
}
startServer();