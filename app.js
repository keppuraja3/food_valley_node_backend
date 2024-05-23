const express = require('express')
const app = express()
// local port 
const port = 9000


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

// app router
app.use(require('./Routes/RegisgerRoute'))

// Listening port

app.listen(port,()=>{
    console.log(`port ${port} is running successfully........`);
})

