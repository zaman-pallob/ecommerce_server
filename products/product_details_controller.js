const {prodDetColl} = require('../config/db_connector');


exports.getProductDetails=async(req,res)=>{
   var id= req.query.productId;
   res.send({statusCode:200,details:await prodDetColl.findOne({productId:parseInt(id)} )});

}