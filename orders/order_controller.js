const {orderColl} = require('../config/db_connector');
exports.getOrders=async(req,res)=>{
    
        res.send({statusCode:200,data:await orderColl.find().toArray()});

}

exports.placeOrder=async(req,res)=>{
    var orderId= new Date().getTime();
    var orProducts=req.body.orderedProducts;
    var placedDate=req.body.placedDate;
    var paymentStatus=req.body.paymentStatus;

    try {
        var item={orderId:orderId,placedDate:placedDate,paymentStatus:paymentStatus,orderedProducts:orProducts};
        var result=await orderColl.insertOne(item);   
        if (result.acknowledged==true) {
            res.send({statusCode:200,message:"Successfully Order Placed"});
        } else {
            res.send({statusCode:422,message:"Insertion failed"});
        }   
     
    } catch (error) {
        res.send({statusCode:422,message:error});
    }
}