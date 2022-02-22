// external imports
const express = require("express");


// internal imports
const { getUsers } = require("../controllers/usersController");

const avatarUpload = require("../middlewares/users/avatarUpload");

const router = express.Router();


// User page
router.get("/", getUsers);

router.post("/", avatarUpload);

module.exports = router;