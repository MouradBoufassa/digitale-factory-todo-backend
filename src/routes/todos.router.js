const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticate');

const { createTodo, getTodos, updateTodoById } = require('../controllers/todos.controller');

router.post('/', authenticate, createTodo);
router.get('/', authenticate, getTodos);
router.patch('/:id', authenticate, updateTodoById);

module.exports = router;
