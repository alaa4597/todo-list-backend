const express = require("express");
const app = express();
const taskRoute = require("./routes/task.route");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:4200"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use("/api/task", taskRoute);

module.exports = app;