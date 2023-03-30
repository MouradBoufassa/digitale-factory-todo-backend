const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    position: {
        type: Number,
        required: true
    },
    finished: {
        type: Boolean,
        required: true,
        default: false
    },
    embeddedTodos: [{
        title: {
            type: String,
        },
        checked: {
            type: Boolean,
            default: false
        }
    }],
    endDate: {
        type: Date,
    },
});

module.exports = new mongoose.model('Todo', todoSchema);