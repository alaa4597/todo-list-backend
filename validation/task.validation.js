const{body}=require("express-validator")

const taskValidators=[
  body("title").trim().notEmpty().withMessage("Name is required").escape(),
]

module.exports=taskValidators
