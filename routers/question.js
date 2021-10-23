const express = require("express");
const { askNewQuestion,getAllQuestions,getSingleQuestion } = require("../controllers/question");

const {getAccessToRoute} = require ("../middlewares/authorization/auth");
const { checkQuestionexist } = require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();


router.get("/", getAllQuestions)
router.get("/:id", checkQuestionexist, getSingleQuestion)
router.post("/ask", getAccessToRoute, askNewQuestion)


module.exports = router;