import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import model from "./routes/model.js";
import connectDB from "./db/index.js";

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
