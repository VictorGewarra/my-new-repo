const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const userController = require('../controllers/userController');

// Статический маршрут для страницы
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

// Получение списка доступных языков
router.get('/api/languages', (req, res) => {
    const languagesDir = path.join(__dirname, '..', '..', 'languages');
    fs.readdir(languagesDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading languages directory');
        }
        // Фильтруем только директории
        const languages = files.filter(file => {
            return fs.statSync(path.join(languagesDir, file)).isDirectory();
        });
        res.json({ languages });
    });
});

// Получение информации о пользователе
router.get('/profile', userController.getUserInfo);

module.exports = router;
