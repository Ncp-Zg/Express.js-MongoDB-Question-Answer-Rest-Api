const express = require("express");
const {
  getAccessToRoute,
  getAnswerOwnerAccess,
} = require("../middlewares/authorization/auth");
const router = express.Router({ mergeParams: true });
const {
  addNewAnswerToQuestion,
  getAllAnswersByQuestion,
  getSingleAnswer,
  editAnswer,
} = require("../controllers/answer");
const {
  checkQuestionAndAnswerexist,
} = require("../middlewares/database/databaseErrorHelpers");

router.post("/", getAccessToRoute, addNewAnswerToQuestion);
router.get("/", getAllAnswersByQuestion);
router.get("/:answer_id", checkQuestionAndAnswerexist, getSingleAnswer);
router.put(
  "/:answer_id/edit",
  [checkQuestionAndAnswerexist, getAccessToRoute, getAnswerOwnerAccess],
  editAnswer
);

module.exports = router;
