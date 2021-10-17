const CustomError = require("../helpers/error/CustomError");
const customErrorHandler = require("../middlewares/errors/customErrorHandler");
const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler")

const register = asyncErrorWrapper(async (req,res,next) => {

    //async await
    const {name,email,password,role} =req.body;
        const user = await User.create({
        name,
        email,
        password,
        role
    });

    res.status(200).json({
        success:true,
        data :user
    })

    
})

const errorTest = (req,res,next)=>{
    return next(new TypeError("CustomError Message",400))

};

module.exports = {
    register,
    errorTest,
};