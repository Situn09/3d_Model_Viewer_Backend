const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const model = require("./routes/model.js");
const connectDB = require("./db/index.js");

dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 5000;

// MongoDB connection
// mongoose.connect("mongodb://localhost:27017/glbModels", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/models", model);
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/favicon.ico", (req, res) => {
  res.send("bye world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
