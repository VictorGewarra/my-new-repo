//v11
const path = require('path');
const fs = require('fs').promises;

// Получение списка языков
exports.getLanguages = async (req, res) => {
    const rootDir = path.resolve(__dirname, '..', '..');// Это путь к корневой директории проекта

    const languagesDir = path.join(rootDir, 'languages'); // Путь к директории languages в корневом каталоге

    try {
        const files = await fs.readdir(languagesDir, { withFileTypes: true });

        const languages = files
            .filter(file => file.isDirectory())
            .map(file => file.name);

        res.json({ languages });
    } catch (err) {
        console.error('Error reading languages directory:', err);
        res.status(500).json({ error: 'Failed to read languages directory' });
    }
};
//const languagesDir = path.join(__dirname, '..', 'languages'); //./src/lang    const rootDir = path.resolve(__dirname, '..'); 