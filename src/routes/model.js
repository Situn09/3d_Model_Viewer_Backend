const express = require("express");
const multer = require("multer");
const { Model } = require("../models/Model.js");
const { uploadOnCloudinary } = require("../utils/cloundinary.js");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  const colundinaryFile = await uploadOnCloudinary(req.file.path);
  const model = new Model({
    name: req.body.name,
    url: colundinaryFile.url,
  });

  await model.save();
  res.send(model);
});

router.get("/", async (req, res) => {
  const models = await Model.find();
  res.send(models);
});

module.exports = router;
