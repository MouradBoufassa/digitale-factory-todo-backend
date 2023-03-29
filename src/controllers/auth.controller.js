// * Third party imports
const asyncHandler = require('express-async-handler');
const { isEmail } = require('validator');

// * Helper functions
const generateJWT = require('../functions/generateJWT');

// * Models
const User = require('../models/User.model');

// * LOG IN * //
// @desc    Logs a user in to their account
// @route   POST /api/auth
// @access  public
const login = ('/', asyncHandler(async (req, res) => {
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

    // Finds the user
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
        const message = 'Wrong email. Please try again.';
        res.status(401).json({ message });
        throw new Error(message);
    };

    const token = generateJWT(user.id);

    res.json({ user, token });
}));

module.exports = { login };
