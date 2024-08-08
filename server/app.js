const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Импорт маршрутов
const indexRouter = require('./routes/index');
const testsRouter = require('./routes/tests');
const languagesRouter = require('./routes/languages');
const userRouter = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Настройка статики для файлов React
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));  // Обслуживаем файлы React из каталога build

// Обработка API-запросов
app.use('/api/tests', testsRouter);
app.use('/api/languages', languagesRouter);
app.use('/api/users', userRouter);
// Use task routes
app.use('/api/tasks', taskRoutes);

// Обработка маршрутов, которые не являются API-запросами
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));  // Отправляем главный файл React
});

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
