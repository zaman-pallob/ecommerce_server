const {todo} = require('../config/db_connector');
exports.getTodo=async(req,res)=>{

    var search=req.query.search;
    const searchPattern = new RegExp(search, 'i');
    res.send({statusCode:200,data:await todo.find({title: { $regex: searchPattern} }).toArray()});

}

exports.postTodo=async(req,res)=>{

    var title=req.body.title;
    var details=req.body.details;
        var item={
            title:title,
            details:details
        }
    await todo.insertOne(item);
    res.send({statusCode:200,data:await todo.find().toArray()});

}

exports.removeTodo=async(req,res)=>{

    var id=req.query.id;
    await todo.findOneAndDelete({_id:id});
    res.send({statusCode:200,data:await todo.find().toArray(),message:"Deleted"});

}

exports.updateTodo=async(req,res)=>{

    var id=req.body.id;
    var title=req.body.title;
    var details=req.body.details;
    var item=await todo.findOne({_id:id});
    item={_id:id,title:title,details:details};
    const filter = { _id: id};
    await cartColl.findOneAndReplace(filter,item);


    res.send({statusCode:200,data:await todo.find().toArray()});

}