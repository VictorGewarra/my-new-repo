// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Route to get tasks by category
router.get('/:category', taskController.getTasksByCategory);

// Route to get task details
router.get('/:category/:taskId', taskController.getTaskDetails);

module.exports = router;
