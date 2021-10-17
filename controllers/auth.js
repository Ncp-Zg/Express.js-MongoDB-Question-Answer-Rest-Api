const CustomError = require("../helpers/error/CustomError");
const customErrorHandler = require("../middlewares/errors/customErrorHandler");
const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler")
const sendJwtToClient = require("../helpers/authorization/sendJwtToClient")

const register = asyncErrorWrapper(async (req,res,next) => {

    //async await
    const {name,email,password,role} =req.body;
        const user = await User.create({
        name,
        email,
        password,
        role
    });

    sendJwtToClient(user,res)

    
})

const errorTest = (req,res,next)=>{
    return next(new TypeError("CustomError Message",400))

};

module.exports = {
    register,
    errorTest,
};