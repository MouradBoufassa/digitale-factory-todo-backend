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


module.exports = { createTodo };
