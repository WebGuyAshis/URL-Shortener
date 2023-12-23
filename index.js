import express from "express";
import router from "./routes/index.js";
import { db } from "./config/mongoose.js";
import dotenv from 'dotenv'
import session from 'express-session'
import passport from "passport";
import passportLocal from "./config/passport-local-strategy.js";

dotenv.config()

const app = express();

// calling DataBase
db();

app.use(express.urlencoded({extended:true}))

app.use(session({
    name:"url_shortener",
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge: 24 * 60 * 60 * 2000, // 2 days
    }

}))

app.use(passport.initialize());
app.use(passport.session());

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
