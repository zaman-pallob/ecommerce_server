const {prodColl} = require('./../config/db_connector');
exports.getProducts=async(req,res)=>{

    var search=req.query.search;
    var category=req.query.category;
    
    const searchPattern = new RegExp(search, 'i');
    const categoryPattern = new RegExp(category, 'i')
        console.log(search +" "+category);
    
        res.send({statusCode:200,data:await prodColl.find({productName: { $regex: searchPattern}, category:{ $regex: categoryPattern} }).toArray()});

}