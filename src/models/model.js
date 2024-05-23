const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  name: String,
  url: String,
});
const Model = mongoose.model("Model", modelSchema);

module.exports = Model;
