const express = require("express");
// Import School Controller
const { register, login } = require("../controllers/auth");

// Init express router
const router = express.Router();

router.post("/auth/login", login);

router.post("/auth/register", register);

//export
module.exports = router;
