require("dotenv").config();
const express = require('express')
const mongoose= require('mongoose');
const app = express()
const { errorHandler } = require('./config/error_handler');
const  handler= require('./config/route_handler');
app.use(express.json());


const port = process.env.PORT|| 9000;

async function connect(){
    
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected with mongdb");
    } catch (error) {
        console.error(error);
    }

}
connect();
app.use(handler);
app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port} `))