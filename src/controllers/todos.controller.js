// * Third party imports
const asyncHandler = require('express-async-handler');

// * Models
const Todo = require('../models/Todo.model');

// * CREATE TODO * //
// @desc    Creates a new todo for a user
// @route   POST /api/todos
// @access  private - authenticated users only
const createTodo = ('/', asyncHandler(async (req, res) => {
    const { title, description, endDate } = req.body;

    // Checks if the user provided the title
    if (!title) {
        const message = 'Please enter a title.';
        res.status(400).json({ message });
        throw new Error(message);
    };

    await Todo.updateMany({}, { $inc: { position: 1 } });

    const todo = await Todo.create({
        author: req.user._id,
        title,
        description,
        position: 0,
        endDate: endDate && new Date(endDate)
    });

    res.json(todo);
}));

// * GET TODOS * //
// @desc    Gets the todos of an authenticated user
// @route   GET /api/todos
// @access  private - authenticated users only
const getTodos = ('/', asyncHandler(async (req, res) => {
    const todos = await Todo.find({ author: req.user._id });
    res.json(todos);
}));

// * UPDATE TODO * //
// @desc    Updates a todo by its ID
// @route   PATCH /api/todos/:id
// @access  private - authenticated users only
const updateTodoById = ('/', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description, endDate, finished } = req.body;

    const todo = await Todo.findOneAndUpdate(id, {
        title: title,
        description: description,
        endDate: endDate,
        finished
    });

    if (!todo) {
        const message = 'This todo does not exist. Please try again later.';
        res.status(404).json({ message });
        throw new Error(message);
    };

    res.json(todo);
}));

// * REORDER TODO * //
// @desc    Reorders a todo by its ID
// @route   PATCH /api/todos/:id/reorder
// @access  private - authenticated users only
const reorderTodoById = ('/', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { newOrder } = req.body;

    // Iterate over the new order of todo IDs and update their positions in the database
    for (let i = 0; i < newOrder.length; i++) {
        await Todo.findByIdAndUpdate(id, { position: i });
    };

    res.json('good');
}));

module.exports = { createTodo, getTodos, updateTodoById, reorderTodoById };
