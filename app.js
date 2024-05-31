const express = require('express')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
// local port 
const port =process.env.PORT ||9000


// ------Mongo Db connection config--------

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log(`MongoDb:  ${process.env.MONGODB_URL} is connected successfully`);
})
.catch((err)=>{
    console.error("Error in mongoDb connection ",err.message);
})

// ------Mongo Db connection config--------


app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:5173",
        methods:["POST","GET","PUT","DELETE"],
        allowedHeaders: "Content-Type"
    }
))

const UserRoute = require('./Routes/UserRoute')
const MenuRoute = require('./Routes/MenuRoute')

// app router
app.use(UserRoute);
app.use(MenuRoute);

// Listening port

app.listen(port,()=>{
    console.log(`port ${port} is running successfully........`);
})

