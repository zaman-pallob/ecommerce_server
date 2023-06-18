exports.errorHandler=(req, res, next) =>{
    
    res.status(200).send({message:'Welcome home server is running',statusCode:200});
  }