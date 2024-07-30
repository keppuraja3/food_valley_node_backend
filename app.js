const express = require('express')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const path= require('path')
dotenv.config();
// local port 
const port =process.env.PORT ||9000


// ------Mongo Db connection config--------

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log(`MongoDb: Database is connected successfully`);
})
.catch((err)=>{
    console.error("Error in mongoDb connection ",err.message);
})


// ------express--------

app.use(express.json());
app.use(cookieParser())
app.use("/uploads", express.static(path.join(__dirname,'uploads')))
app.use(cors(
    {
        origin: "*",
        methods:["POST","GET","PUT","DELETE"],
        allowedHeaders: "Content-Type"
    }
))

const UserRoute = require('./Routes/UserRoute')
const MenuRoute = require('./Routes/MenuRoute');
const { log } = require('console');

// app router
app.use(UserRoute);
app.use(MenuRoute);

// Listening port

app.listen(port,()=>{
    console.log(`port ${port} is running successfully........`);
})

