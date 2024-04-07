const Todo = require('../models/todo');

async function create(todoData) {
    const todo = new Todo(todoData);
    await todo.save();
    return todo;
}

async function getAll(userId) {
    return await Todo.find({ userId: userId });
}


async function getById(userId, id) {
    return await Todo.findOne({ _id: id, userId: userId });
}


async function update(id, todoData) {
    return await Todo.findByIdAndUpdate(id, todoData, { new: true });
}

async function remove(id) {
    return await Todo.findByIdAndDelete(id);
}

module.exports = { create, getAll, getById, update, remove };
