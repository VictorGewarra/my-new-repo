const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Получение профиля пользователя
router.get('/profile', authMiddleware.verifyToken, userController.getProfile);

// Обновление информации о пользователе
router.put('/profile', authMiddleware.verifyToken, userController.updateProfile);

// Удаление пользователя
router.delete('/profile', authMiddleware.verifyToken, userController.deleteProfile);

module.exports = router;
