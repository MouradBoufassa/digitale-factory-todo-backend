// * Third party imports
const asyncHandler = require('express-async-handler');
const { isEmail } = require('validator');

// * Models
const User = require('../models/User.model');

// * CREATE ACCOUNT * //
// @desc    Creates a new user account
// @route   POST /api/users
// @access  public
const createUser = ('/', asyncHandler(async (req, res) => {
    const { email } = req.body;

    // Checks if the user provided and email
    if (!email) {
        const message = 'Please enter your email address.';
        res.status(400).json({ message });
        throw new Error(message);
    };

    // Checks if the user provided a valid email address
    if (!isEmail(email)) {
        const message = 'Please enter a valid email address.';
        res.status(400).json({ message });
        throw new Error(message);
    };

    // Checks if the user already exists
    const userExists = await User.findOne({ email: email.toLowerCase() });

    if (userExists) {
        const message = 'User already exists.';
        res.status(409).json({ message });
        throw new Error(message);
    };

    const user = await User.create({ email });
    res.json(user);
}));

module.exports = { createUser };
