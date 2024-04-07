const authService = require('../services/authService');

async function register(req, res) {
    const { username, password } = req.body;
    try {
        await authService.register(username, password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = { register, login };
