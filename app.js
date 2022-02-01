const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { urlencoded } = require("body-parser");


dotenv.config();

const app = express();

mongoose.connect(process.env.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Database connection successfull!")
})
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");


// console.log(process.env.APP_NAME);