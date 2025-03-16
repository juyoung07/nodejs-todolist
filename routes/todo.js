const express = require('express');
const router = express.Router();
const { Todo } = require('../models');

// get all of the todos
router.get('/todos', async (req, res, next) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json({ message: 'Todos retrieved successfully', data: todos });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// get a todo by id
router.get('/todos/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const todos = await Todo.findOne({ where: { id } });
        if (!todos) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todos retrieved successfully', data: todos });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// create a new todo
router.post('/todos', async (req, res, next) => {
    try {
        const content = req.body;
        const todo = await Todo.create(content);
        res.status(201).json({ message: 'Todo created successfully', data: todo });
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// update a todo
router.patch('/todos/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const todos = await Todo.findOne({ where: { id } });
        if (!todos) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        const content = req.body;
        await Todo.update(content, { where: { id } });

        const updatedTodo = await Todo.findOne({ where: { id } });
        res.status(200).json({ message: 'Todo updated successfully', data: updatedTodo });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// delete a todo
router.delete('/todos/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        await Todo.destroy({ where: { id } });
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;