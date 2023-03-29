const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticate');

const { createTodo, getTodos } = require('../controllers/todos.controller');

router.post('/', authenticate, createTodo);
router.get('/', authenticate, getTodos);

module.exports = router;
