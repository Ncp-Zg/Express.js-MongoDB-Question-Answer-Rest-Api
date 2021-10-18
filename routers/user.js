const express = require("express");
const { getSingleUser,getAllUsers } = require("../controllers/user.js");
const { checkUserexist } = require("../middlewares/database/databaseErrorHelpers.js");
const router = express.Router();



router.get("/",getAllUsers)
router.get("/:id",checkUserexist, getSingleUser)


module.exports=router;