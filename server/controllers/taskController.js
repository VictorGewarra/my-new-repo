//v12
// version: 1.0.2
const path = require('path');
const fs = require('fs').promises;

// Получение корневого каталога проекта
const rootDir = path.resolve(__dirname, '..', '..'); // Поднимаемся на два уровня выше из /src/routes

// Путь к директории languages в корневом каталоге
const languagesDir = path.join(rootDir, 'languages');

exports.getTasks = async (req, res) => {
    const language = req.params.language;
    const taskDirectory = path.join(languagesDir, language); // Путь к директории с задачами для выбранного языка

    try {
        // Проверяем наличие директории
        await fs.access(taskDirectory);

        // Читаем содержимое директории
        const files = await fs.readdir(taskDirectory);
        let taskHtml = '';

        // Обрабатываем файлы
        for (const file of files) {
            if (file.endsWith('.md')) {
                const taskPath = path.join(taskDirectory, file);
                const taskContent = await fs.readFile(taskPath, 'utf8');
                
                // Создаем уникальный идентификатор для каждой задачи
                const taskId = file.replace('.md', '');

                taskHtml += `
                    <div class="task" id="task-${taskId}" onclick="handleTaskClick('${taskId}')">
                        <h2>${taskId}</h2>
                        <p>${taskContent}</p>
                    </div>
                `;
            }
        }

        // Отправляем HTML-контент в ответе
        res.send(taskHtml);
    } catch (err) {
        console.error('Error reading tasks directory:', err);
        res.status(500).json({ error: 'Failed to read tasks directory' });
    }
};
