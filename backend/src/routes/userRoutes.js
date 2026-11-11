const express = require("express");
const router = express.Router();
const { createProfile } = require("../controllers/userController");
router.post("/create-profile",createProfile);
module.exports = router;