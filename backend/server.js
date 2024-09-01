// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Root endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).send("Something broke!");
});

// Define PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
