// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getDashboard,
} = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", register);

// @route   POST /api/auth/login
// @desc    Login user and get token
// @access  Public
router.post("/login", login);

// @route   GET /api/auth/dashboard
// @desc    Get user dashboard
// @access  Private
router.get("/dashboard", auth, getDashboard);

module.exports = router;
