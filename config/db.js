  const mongoose = require("mongoose");
  require("dotenv").config();

  const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("connected to mongoDB server successfully");
    } catch (err) {
      console.log(`failed to connect with mongoDB server: ${err}`);
    }
  };

  module.exports = connectDB;