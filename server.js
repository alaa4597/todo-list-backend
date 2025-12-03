require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

//connectDB();

// app.listen(process.env.PORT,()=>{
//    console.log("server is running at:",`http://localhost:${process.env.PORT}`);
// })  

// Serverless handler
let conn = null;

module.exports = async (req, res) => {
  // Connect to MongoDB only once
  if (!conn) {
    conn = await connectDB();
  }
  // Pass request to Express app
  return app(req, res);
};