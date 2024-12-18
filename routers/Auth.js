const express = require("express");
const { login, register } = require("../controllers/Auth");
const router = express.Router();

router.post("/login", login).post("/register", register);

module.exports = router;
