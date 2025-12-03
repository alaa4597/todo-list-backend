const Task = require("./../models/task.model");

const createTask = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }
    const exist = await Task.findOne({ title});
    if (exist) {
      return res
        .status(409)
        .json({ success: false, message: "Task already exists" });
    }
    const task = await Task.create({
      title,
    });
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    if (!tasks.length) {
      return res
        .status(404)
        .json({ success: false, message: "No tasks found" });
    }
    res.status(200).json({
      success: true,
      message: "Tasks retrieved successfully",
      data: tasks,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};


module.exports = {createTask,getAllTasks};