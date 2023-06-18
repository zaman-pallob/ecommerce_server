require("dotenv").config();
const express = require('express')
const app = express()
const { errorHandler } = require('./config/error_handler');
const  handler= require('./config/route_handler');
app.use(express.json());


const port = process.env.PORT|| 9000;
app.use(handler);
app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))