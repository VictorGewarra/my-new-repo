const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Получение информации о пользователе (защищено аутентификацией)
router.get('/info', authMiddleware, userController.getUserInfo);

// Обновление информации о пользователе (защищено аутентификацией)
router.put('/info', authMiddleware, userController.updateUserInfo);

module.exports = router;
