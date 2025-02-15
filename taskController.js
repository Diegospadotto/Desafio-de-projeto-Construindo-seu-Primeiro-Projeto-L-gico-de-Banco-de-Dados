const Task = require('../models/taskModel');

const taskController = {
  createTask(req, res) {
    const { title, description } = req.body;
    const task = Task.addTask(title, description);
    res.status(201).json(task);
  },

  listTasks(req, res) {
    const tasks = Task.getTasks();
    res.status(200).json(tasks);
  },

  editTask(req, res) {
    const { id, title, description } = req.body;
    const task = Task.editTask(id, title, description);
    res.status(200).json(task);
  },

  deleteTask(req, res) {
    const { id } = req.params;
    Task.deleteTask(id);
    res.status(204).send();
  },
};

module.exports = taskController;