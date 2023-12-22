import express from "express";
import router from "./routes/index.js";
import { db } from "./config/mongoose.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express();

// calling DataBase
db();

app.use(express.urlencoded({extended:true}))

// Handling Routes

app.use("/", router)

// Server Started at port 8080
app.listen(8080, (err) => {
  if (err) {
    console.log("Error Starting the Server!");
    return;
  }
  console.log("Server Successfully Started at port 8080!");
});
