const todoService = require('../services/todoService');

async function create(req, res) {
    const { title, description, completed } = req.body;
    const userId = req.user._id 
    try {
        const todo = await todoService.create({ title, description, completed, userId });
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getAll(req, res) {
    const userId = req.user._id 
console.log("data",userId)
    try {
        const todos = await todoService.getAll(userId);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getById(req, res) {
    const { id } = req.params;
    const userId = req.user._id;
    try {
        const todo = await todoService.getById(userId, id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


async function update(req, res) {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const updatedTodo = await todoService.update(id, { title, description, completed });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function remove(req, res) {
    const { id } = req.params;
    try {
        const removedTodo = await todoService.remove(id);
        if (!removedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { create, getAll, getById, update, remove };
