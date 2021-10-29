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
  deleteAnswer,
  likeAnswer,
  undoLikeAnswer
} = require("../controllers/answer");
const {
  checkQuestionAndAnswerexist,
} = require("../middlewares/database/databaseErrorHelpers");

router.post("/", getAccessToRoute, addNewAnswerToQuestion);
router.get("/", getAllAnswersByQuestion);
router.get("/:answer_id", checkQuestionAndAnswerexist, getSingleAnswer);
router.get(
  "/:answer_id/like",
  [checkQuestionAndAnswerexist, getAccessToRoute],
  likeAnswer
);
router.get(
  "/:answer_id/undo_like",
  [checkQuestionAndAnswerexist, getAccessToRoute],
  undoLikeAnswer
);
router.put(
  "/:answer_id/edit",
  [checkQuestionAndAnswerexist, getAccessToRoute, getAnswerOwnerAccess],
  editAnswer
);
router.delete(
  "/:answer_id/delete",
  [checkQuestionAndAnswerexist, getAccessToRoute, getAnswerOwnerAccess],
  deleteAnswer
);

module.exports = router;
