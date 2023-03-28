const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => isEmail(value),
            message: (props) => `${props.value} is not a valid email address`,
        }
    },
});

module.exports = new mongoose.model('User', userSchema);