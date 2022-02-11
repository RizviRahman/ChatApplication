const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");


const { notFoundHandler, errorHandler } = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");
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
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);




// ERROR HANDLING
app.use(notFoundHandler);

app.use(errorHandler);


app.listen(process.env.PORT, ()=>{
    console.log(`Application is running at http://localhost:${process.env.PORT}`);
});

// console.log(process.env.APP_NAME);