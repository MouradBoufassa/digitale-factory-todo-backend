const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo API',
            version: '0.0.0',
            description: 'Todo API'
        },
        servers: [{ url: `http://localhost:${process.env.PORT || 5000}` }]
    },
    apis: [path.join(__dirname, '../swaggerDocs/*.js')],
};

const swaggerSpecs = swaggerJsDoc(options);

module.exports = swaggerSpecs;