const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Получение списка доступных языков
router.get('/list', (req, res) => {
    const languagesDir = path.join(__dirname, '..', '..', 'languages');
    
    fs.readdir(languagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read languages directory' });
        }

        // Фильтруем только папки (языки программирования)
        const languages = files.filter(file => {
            const filePath = path.join(languagesDir, file);
            return fs.statSync(filePath).isDirectory();
        });

        res.json(languages);
    });
});

module.exports = router;
