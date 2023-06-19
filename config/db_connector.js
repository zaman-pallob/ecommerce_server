const client = require('./../config/mongo_connector');
var db=client.db("ecommerce");
var prodColl=db.collection("products");
var prodDetColl=db.collection("product_details");
var cartColl=db.collection("cart");
var orderColl=db.collection("order");
var todo=db.collection("todo");




module.exports={prodColl,prodDetColl,cartColl,orderColl,todo};

