const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const { createProfile } = require("../controllers/userController");
router.post("/create-profile", verifyToken, createProfile);
module.exports = router;