const express = require('express')
const app = express()
const cors = require('cors')
// local port 
const port =process.env.PORT ||9000


// ------Mongo Db connection config--------

const mongoose = require('mongoose')

const MONGODB_URL = 'mongodb://localhost:27017/FoodValley'

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log(`MongoDb:  ${MONGODB_URL} is connected successfully`);
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


// app router
app.use(require('./Routes/RegisgerRoute'))

// Listening port

app.listen(port,()=>{
    console.log(`port ${port} is running successfully........`);
})

