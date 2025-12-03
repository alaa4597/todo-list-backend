const { validationResult } = require("express-validator")

function validatorMiddleware(req,res,next){
    let errors=validationResult(req) 
    if(!errors.isEmpty()){
       return res.status(400).json({message:errors.array()[0].msg,Errors:errors.array()})
    }
    next()
}


module.exports= validatorMiddleware 