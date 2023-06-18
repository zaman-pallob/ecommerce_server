const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const api = require('../config/endpoints');

const {getProducts,} = require('./../products/product_controller');
const {getProductDetails} = require('./../products/product_details_controller');

const {getOrders,placeOrder} = require('./../orders/order_controller');
const {getCartItem,removeCartItem,updateCart} = require('./../cart/cart_controller');



router.get(api.endpoints.products,getProducts);
router.get(api.endpoints.productDetails,getProductDetails)
router.get(api.endpoints.cart,getCartItem);
router.delete(api.endpoints.cart,removeCartItem);
router.get(api.endpoints.order,getOrders);
router.post(api.endpoints.order,placeOrder);
router.post(api.endpoints.cart,updateCart);


module.exports=router;