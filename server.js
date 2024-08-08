const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Настройка EJS как шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
//app.set('views', path.join(__dirname, './views'));
//app.use('/', require('./src/routes/indexRoutes'));
// Middleware для обработки статических файлов
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключение маршрутов

const authRoutes = require('./src/routes/authRoutes');
const languageRoutes = require('./src/routes/languageRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Обслуживание страниц
app.get('/', (req, res) => {
    res.render('index');  // Рендеринг страницы с использованием EJS
});

app.get('/tasks', (req, res) => {
    res.render('tasks');  // Рендеринг страницы с использованием EJS
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



/*app.get('/login', (req, res) => {
    res.render('login');  // Рендеринг страницы с использованием EJS
});

app.get('/register', (req, res) => {
    res.render('register');  // Рендеринг страницы с использованием EJS
});
app.get('/tasks/:language', (req, res) => {
    const { language } = req.params;
    // Логика для получения задач по языку
    res.render('tasks', { language });
});

app.get('/tasks/:id', (req, res) => {
    res.render('taskDetails');  // Рендеринг страницы с использованием EJS
});

*/