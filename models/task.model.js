const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      inlength: [1, 'Todo text cannot be empty']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);