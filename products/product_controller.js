exports.getProducts=(req,res)=>{

    var searchKey=req.query.searchkey;

    console.log(searchKey);
    if (searchKey=="" || searchKey==null) {
        res.send({statusCode:200,data:[]})
       
    }else {
        console.log(newList);
        res.send({statusCode:200,data:[]})
    }
}