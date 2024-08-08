const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/run-tests', (req, res) => {
    const testFileName = req.body.testFileName; // Получаем имя файла тестов из запроса
    const testFilePath = path.join(__dirname, 'tests', testFileName);

    if (!testFileName || path.extname(testFileName) !== '.ps1') {
        res.status(400).send('Invalid test file name or extension');
        return;
    }

    const ps = spawn('powershell.exe', ['-NoProfile', '-Command', `Invoke-Pester -Path ${testFilePath}`]);

    let output = '';
    let errorOutput = '';

    ps.stdout.on('data', (data) => {
        output += data.toString();
    });

    ps.stderr.on('data', (data) => {
        errorOutput += data.toString();
    });

    ps.on('close', (code) => {
        if (code !== 0) {
            console.error(`Error running tests: ${errorOutput}`);
            res.status(500).send(`Error running tests: ${errorOutput}`);
        } else {
            res.send(output);
        }
    });

    ps.on('error', (err) => {
        console.error(`Failed to start subprocess: ${err.message}`);
        res.status(500).send(`Failed to start subprocess: ${err.message}`);
    });
});

const port = 3000;
const host = process.env.HOST || 'localhost';
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
