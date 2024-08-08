const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(403).send('Token is required');
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        req.userId = decoded.userId;
        next();
    });
};

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }

        req.userId = decoded.id;
        next();
    });
};

module.exports = authMiddleware;
