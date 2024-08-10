const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', '..', 'exercise');

// Вспомогательная функция для чтения задач из файла
const readTasksFromFile = (filePath) => {
    console.log('Reading file from path:', filePath);  // Логирование пути к файлу
    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return { tasks: [] }; // Возвращаем пустой объект в случае ошибки
        }
    } else {
        console.error('File not found:', filePath);  // Логирование отсутствия файла
        return { tasks: [] }; // Возвращаем пустой объект, если файл не найден
    }
};

// Контроллер для получения задач по категории
const getTasksByCategory = (req, res) => {
    try {
        const { category } = req.params;  // Извлечение параметра категории
        const filePath = path.join(baseDir, `${category}.json`);
        console.log('File path for tasks by category:', filePath);  // Логирование пути к файлу
        const { tasks } = readTasksFromFile(filePath);
        res.json({ tasks });
    } catch (error) {
        console.error('Error in getTasksByCategory:', error);  // Логирование ошибок
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Контроллер для получения деталей задачи
const getTaskDetails = (req, res) => {
    try {
        const { category, taskId } = req.params;  // Извлечение параметров категории и задачи
        const filePath = path.join(baseDir, `${category}.json`);
        console.log('File path for task details:', filePath);  // Логирование пути к файлу
        const { tasks } = readTasksFromFile(filePath);
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error('Error in getTaskDetails:', error);  // Логирование ошибок
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getTasksByCategory,
    getTaskDetails
};


