const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/User");




const blockUser =asyncErrorWrapper(async(req,res,next)=>{

    const {id}=req.params;

    const user = await User.findById(id);

    user.blocked = !user.blocked;

    await user.save();

    return res.status(200).json({
        success:true,
        message:"Block-Unblock Successful"
    })

})

const deleteUser = asyncErrorWrapper(async (req,res,next)=>{
        const {id}=req.params;

        const user = await User.findById(id);

        await user.remove();

        return res.status(200).json({
            success: true,
            message : "Delete Operation Successfull"
        })
})
module.exports={
    blockUser,
    deleteUser,
}