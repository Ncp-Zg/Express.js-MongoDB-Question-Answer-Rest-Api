const CustomError = require("../helpers/error/CustomError");
const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");



const getSingleUser = asyncErrorWrapper(async(req,res,next)=>{
    const {id} = req.params;

    return res.status(200)
    .json({
        success:true,
        data: req.data
    })
})



const getAllUsers = asyncErrorWrapper(async(req,res,next)=>{
    const users = await User.find();


    return res.status(200)
    .json({
        success:true,
        data:users
    })
})


module.exports={
    getSingleUser,
    getAllUsers
}