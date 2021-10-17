const express = require("express");
const {register,errorTest} = require("../controllers/auth");

const router = express.Router();


router.post("/register",register)
router.post("/error",errorTest)


module.exports = router;