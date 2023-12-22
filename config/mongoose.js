import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


export const db = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((e)=>{
        console.log("Connected to MongoDB!");
    })
    .catch((err)=>{
        console.log("Error Connecting to MongoDB!");
    })
}