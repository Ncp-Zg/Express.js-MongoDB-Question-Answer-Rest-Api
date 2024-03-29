const express = require("express");
const { blockUser,deleteUser } = require("../controllers/admin");
const { getAdminAccess, getAccessToRoute } = require("../middlewares/authorization/auth");
const { checkUserexist } = require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();

//Block User
//Delete User
router.use([getAccessToRoute ,getAdminAccess])


router.get("/block/:id",checkUserexist,blockUser)
router.delete("/user/:id",checkUserexist,deleteUser)


module.exports=router;