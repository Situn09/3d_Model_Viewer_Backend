const express = require("express");
const multer = require("multer");
const Model = require("../models/model.js");
const uploadOnCloudinary = require("../utils/cloundinary.js");
const { ApiError } = require("../utils/ApiError.js");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  // const colundinaryFile = await uploadOnCloudinary(req.file.path);
  // if (!colundinaryFile)
  //   throw new ApiError(400, "3d model cloundinary path is required");
  const modleFile = req.file;
  if (!modleFile) throw new ApiError(400, "3d model modleFile is required");
  const model = new Model({
    name: req.body.name,
    url: `http://localhost:5000/uploads/${req.file.filename}`,
  });

  await model.save();
  res.send(model);
});

router.get("/", async (req, res) => {
  const model = await Model.find();
  res.send(model);
});

module.exports = router;
