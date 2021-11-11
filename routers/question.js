const express = require("express");

const answer = require("./answer")
const {
  askNewQuestion,
  getAllQuestions,
  getSingleQuestion,
  editQuestion,
  deleteQuestion,
  likeQuestion,
  undolikeQuestion
} = require("../controllers/question");
const {
  getAccessTokenFromHeader,
} = require("../helpers/authorization/tokenHelpers");

const {
  getAccessToRoute,
  getQuestionOwnerAccess,
} = require("../middlewares/authorization/auth");
const {
  checkQuestionexist,
} = require("../middlewares/database/databaseErrorHelpers");

const questionQueryMiddleWare = require("../middlewares/query/questionQueryMiddleware");
const Question = require("../models/Question");


const router = express.Router();


router.get("/:id/like",[getAccessToRoute,checkQuestionexist],likeQuestion)
router.get("/:id/undo_like",[getAccessToRoute,checkQuestionexist],undolikeQuestion)

router.get("/", questionQueryMiddleWare(Question,{
  population : {
    path: "user",
    select :"name profile_image"
  }
}) , getAllQuestions);
router.get("/:id", checkQuestionexist, getSingleQuestion);
router.post("/ask", getAccessToRoute, askNewQuestion);
router.put(
  "/:id/edit",
  [getAccessToRoute, checkQuestionexist, getQuestionOwnerAccess],
  editQuestion
);
router.delete(
  "/:id/delete",
  [getAccessToRoute, checkQuestionexist, getQuestionOwnerAccess],
  deleteQuestion
);

router.use("/:question_id/answers",checkQuestionexist,answer)


module.exports = router;
