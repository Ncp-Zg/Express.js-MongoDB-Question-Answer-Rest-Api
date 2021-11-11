const express = require("express");
const { getSingleUser,getAllUsers } = require("../controllers/user.js");
const { checkUserexist } = require("../middlewares/database/databaseErrorHelpers.js");
const userQueryMiddleware = require("../middlewares/query/userQueryMiddleware");
const User = require("../models/User.js");
const router = express.Router();



router.get("/",userQueryMiddleware(User),getAllUsers)
router.get("/:id",checkUserexist, getSingleUser)


module.exports=router;