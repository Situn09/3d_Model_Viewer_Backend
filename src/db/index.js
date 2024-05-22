const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOSTL ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("MONGODB connection failed ", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
