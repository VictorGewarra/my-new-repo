//server/routes/tests.js
const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const path = require('path');

// Запуск тестов для выбранного языка
router.post('/run-tests', (req, res) => {
    const { language } = req.body;
    const testFilePath = path.join(__dirname, '..', 'languages', language, 'tests', 'run-tests.ps1');

    if (!language || !['power_shell', 'python', 'javascript'].includes(language)) {
        return res.status(400).json({ error: 'Invalid language specified' });
    }

    exec(`powershell.exe -NoProfile -ExecutionPolicy Bypass -File "${testFilePath}"`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr });
        }
        res.json({ result: stdout });
    });
});

module.exports = router;
