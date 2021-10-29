const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const router =express.Router({mergeParams:true});
const {addNewAnswerToQuestion,getAllAnswersByQuestion,getSingleAnswer}=require("../controllers/answer");
const { checkQuestionAndAnswerexist } = require("../middlewares/database/databaseErrorHelpers");

router.post("/",getAccessToRoute,addNewAnswerToQuestion);
router.get("/", getAllAnswersByQuestion)
router.get("/:answer_id",checkQuestionAndAnswerexist,getSingleAnswer)


module.exports = router;