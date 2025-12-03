require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(process.env.PORT,()=>{
   console.log("server is running at:",`http://localhost:${process.env.PORT}`);
})  
