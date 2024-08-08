// indexRoutes.js  !??
const express = require('express');
const router = express.Router();
const path = require('path');

// Отправка index.html из папки views
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', './src/views', 'index.html'));
});

module.exports = router;
