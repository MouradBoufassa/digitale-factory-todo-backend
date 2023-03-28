const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) throw new Error('Please, provide a connection URI in the .env file.');

        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(
            'Connected to MongoDB   >'.green,
            connection.connection.host.blue
        );
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    };
};

module.exports = connectDB;