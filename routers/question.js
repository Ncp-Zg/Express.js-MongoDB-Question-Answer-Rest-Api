const express = require("express");
const {
  askNewQuestion,
  getAllQuestions,
  getSingleQuestion,
  editQuestion,
  deleteQuestion
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

const router = express.Router();

router.get("/", getAllQuestions);
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

module.exports = router;
