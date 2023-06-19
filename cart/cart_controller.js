const {cartColl,prodDetColl} = require('../config/db_connector');


exports.getCartItem=async(req,res)=>{
    res.send({statusCode:200,data:await cartColl.find().toArray()});

}


exports.removeCartItem=async(req,res)=>{
    var id=parseInt(req.query.productId);
    await cartColl.findOneAndDelete({productId:id});
    res.send({statusCode:200,data:await cartColl.find().toArray(),message:"Deleted"});
}
exports.updateCart=async(req,res)=>{

    var id=parseInt( req.body.productId);
     var name=req.body.productName;
     var dp=req.body.thumbnail;
     var quantity=parseInt(req.body.quantity);
     var product=await prodDetColl.findOne({productId:id});
     var cartItem=await cartColl.findOneAndDelete({productId:id});

    
    var hasStock=product.stock>quantity;
    console.log(hasStock);
    try {

        if (hasStock) {
            
           console.log(quantity);
           var item={productId:id,productName:name,thumbnail:dp,quantity:quantity};
            if (cartItem!=null) {
                const filter = { productId: id};
                await cartColl.findOneAndReplace(filter,item);
            }else{
               
                await cartColl.insertOne(item);
            }




            res.send({statusCode:200,data:await cartColl.find().toArray(),message:"Added to cart",});
        
        
        }else{
            res.send({statusCode:200,data:await cartColl.find().toArray(),message:"This product has only "+product.stock +" in stock"});
        }

        
      
     
    } catch (error) {
        res.send({statusCode:422,message:error});
    }
}