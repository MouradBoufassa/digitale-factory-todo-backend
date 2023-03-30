const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticate');

const { createTodo, getTodos, updateTodoById, reorderTodos } = require('../controllers/todos.controller');

router.post('/', authenticate, createTodo);
router.get('/', authenticate, getTodos);
router.patch('/:id', authenticate, updateTodoById);
router.put('/reorder', authenticate, reorderTodos);

module.exports = router;
