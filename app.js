const express = require("express");
const cors = require("cors");

const userRoutes = require("./user.routes");
const errorHandler = require("./backend-app/error.middleware");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// error handler
app.use(errorHandler);

module.exports = app;