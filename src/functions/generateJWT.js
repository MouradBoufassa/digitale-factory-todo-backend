const jwt = require('jsonwebtoken');

function generateJWT(item) {
    return jwt.sign({ item }, process.env.JWT_TOKEN_SECRET);
};

module.exports = generateJWT;