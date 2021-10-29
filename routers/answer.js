const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const router =express.Router({mergeParams:true});
const {addNewAnswerToQuestion}=require("../controllers/answer")

router.post("/",getAccessToRoute,addNewAnswerToQuestion);


module.exports = router;