// controllers/taskController.js
const fs = require('fs');
const path = require('path');

// Define the base directory
const baseDir = 'C:/hodewars/hreact/exercise';

// Helper function to read tasks from a directory
const readTasksFromDirectory = (dir) => {
    const filePath = path.join(baseDir, dir, 'tasks.json');
    if (fs.existsSync(filePath)) {
        const tasks = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(tasks);
    }
    return [];
};

// Controller to get tasks by category
const getTasksByCategory = (req, res) => {
    const { category } = req.params;
    const tasks = readTasksFromDirectory(category);
    res.json(tasks);
};

// Controller to get task details
const getTaskDetails = (req, res) => {
    const { category, taskId } = req.params;
    const tasks = readTasksFromDirectory(category);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

module.exports = {
    getTasksByCategory,
    getTaskDetails
};
