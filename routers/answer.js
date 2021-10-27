const express = require("express");
const router =express.Router({mergeParams:true});


router.get("/",(req,res,next)=>{
    console.log(req.params)
    res.send("Answers Route");
})


module.exports = router;