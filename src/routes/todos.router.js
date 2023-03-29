const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticate');

const { createTodo } = require('../controllers/todos.controller');

router.post('/', authenticate, createTodo);

module.exports = router;
