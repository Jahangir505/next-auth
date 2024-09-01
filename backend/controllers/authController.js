// controllers/authController.js

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register a new user

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      username,
      password,
      email,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Error in register:", err); // This will log the error to the console
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    // generate token
    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Access dashboard (protected route)
exports.getDashboard = async (req, res) => {
  try {
    // req.user is set in the auth middleware
    const user = await User.findById(req.user.id).select("-password");
    res.json({ message: `Welcome, ${user.username}!`, role: user.role });
  } catch (error) {
    console.error("Dashboard Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
