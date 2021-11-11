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
    return res.status(200).json(res.queryResult)
})


module.exports={
    getSingleUser,
    getAllUsers
}