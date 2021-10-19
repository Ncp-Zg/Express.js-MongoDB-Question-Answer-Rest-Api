const express = require("express");
const { getAdminAccess, getAccessToRoute } = require("../middlewares/authorization/auth");

const router = express.Router();

//Block User
//Delete User
router.use([getAccessToRoute ,getAdminAccess])

router.get("/",(req,res,next)=>{
    res.status(200).json({
        succes:true,
        message:"AdminPage"
    })
})


module.exports=router;