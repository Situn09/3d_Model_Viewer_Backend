import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
  name: String,
  url: String, // cloundinary url
});

export const Model = mongoose.model("Model", modelSchema);
