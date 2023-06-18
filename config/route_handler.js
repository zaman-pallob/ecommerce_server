const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const api = require('../config/endpoints');

const {getProducts} = require('./../products/product_controller');
const {addItemToCart,getCartItem,removeCartItem,updateCart} = require('./../cart/cart_controller');

router.get(api.endpoints.products,getProducts);
router.get(api.endpoints.cart,getCartItem);
router.delete(api.endpoints.cart,removeCartItem);
router.post(api.endpoints.cart,addItemToCart);


module.exports=router;