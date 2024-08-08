const User = require('../models/user');

// Получение информации о пользователе
exports.getUserInfo = async (req, res) => {
    try {
        const userId = req.userId; // Предполагаем, что userId доступен через middleware
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json({
            username: user.username,
            score: user.score
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Обновление информации о пользователе
exports.updateUserInfo = async (req, res) => {
    try {
        const userId = req.userId;
        const { username, score, password } = req.body;

        // Поиск пользователя
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Обновление полей
        if (username) user.username = username;
        if (score !== undefined) user.score = score;
        if (password) {
            user.password = password; // Пароль будет автоматически хэширован
        }

        // Сохранение обновленного пользователя
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
