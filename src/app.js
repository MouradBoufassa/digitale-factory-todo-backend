/* eslint-disable no-unused-vars */
// * Imports
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/connectDB');
const swaggerSpecs = require('./config/swaggerOptions');

// * Middleware 
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));
if (process.env.NODE_ENV === 'DEVELOPMENT') app.use(morgan('tiny'));

// * Routes
app.use('/api/users', require('./routes/users.router'));
app.use('/api/auth', require('./routes/auth.router'));
app.use('/api/todos', require('./routes/todos.router'));
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

// * Connection
app.listen(PORT, () => {
    console.log('---------------------');
    console.log(
        'Dev server running at  >'.green,
        `http://localhost:${PORT}`.blue
    );

    connectDB();
});
