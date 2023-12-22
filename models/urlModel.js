import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
   orgUrl:{
    type:String,
    required:true,
    unique:true
   },
   shortUrl:{
    type:String,
    required:true,
   },
   shortId:{
    type:String,
    required:true,
   }
},{
    timestamps:true
});

const URL = mongoose.model('URL',urlSchema);

export default URL;