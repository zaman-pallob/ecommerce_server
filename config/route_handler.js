const express = require('express');
const router = express.Router();
const api = require('../config/endpoints');

const {getProducts} = require('./../products/product_controller');

router.get(api.endpoints.products,getProducts);


module.exports=router;