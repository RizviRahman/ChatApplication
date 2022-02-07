const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
// const { urlencoded } = require("body-parser");


dotenv.config();

const app = express();

mongoose.connect(process.env.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Database connection successfull!");
})
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));

 
app.use(cookieParser(process.env.COOKIE_SECRET));


// ROUTING SETUP




// ERROR HANDLING



app.listen(process.env.PORT, ()=>{
    console.log(`Application is running at http://localhost:${process.env.PORT}`);
});

// console.log(process.env.APP_NAME);