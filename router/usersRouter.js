// external imports
const express = require("express");


// internal imports
const { getUsers } = require("../controllers/usersController");

const router = express.Router();


// User page
router.get("/", getUsers);

module.exports = router;