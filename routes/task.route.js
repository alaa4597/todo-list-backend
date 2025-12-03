const express = require("express");
const {createTask,getAllTasks} = require("../controllers/task.controller");
const taskValidators = require("../validation/task.validation");
const router = express.Router();

router.post("/",taskValidators,createTask);
router.get("/", getAllTasks);


module.exports = router;