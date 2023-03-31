const CronJob = require('cron').CronJob;
const Todo = require('../models/Todo.model');
const User = require('../models/User.model');
const transporter = require('./nodemailer');

const loggedTodos = [];
const intervalTime = process.env.TODO_REMINDER_INTERVAL;
const timezone = process.env.TIMEZONE || 'Africa/Algiers';

const dueDateJob = new CronJob(intervalTime ? `*/${intervalTime} * * * * *` : '0 0 * * *', async function () {
    // the job will run every intervalTime seconds (e.g., if intervalTime is 5, then the job will run every 5 seconds). 
    // Otherwise, if intervalTime is falsy, the cron expression will run every day at midnight (i.e., '0 0 * * *').
    // It is recommended that intervalTime be set only for development or testing purposes, as using small intervals of time may put significant strain on the server.

    try {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // Finds every todo that has endDate of today and that hasn't been finished yet
        const todos = await Todo.find({ endDate: { $gte: today, $lt: tomorrow }, finished: false });

        todos.forEach(async (todo) => {
            if (loggedTodos.includes(todo._id.toString())) return;
            loggedTodos.push(todo._id.toString());

            const { email } = await User.findById(todo.author);

            const template = `
                Hi ${email},

                Just a friendly reminder that your task '${todo.title}' is due on ${todo.endDate}. Please make sure to complete it before the deadline to avoid any delays or inconveniences.

                Best regards,
                Khaled TODOS
            `;

            const mailOptions = {
                from: 'todos@khaled.com',
                to: email,
                subject: 'Todo due date reminder!',
                text: template,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) { console.log(error); }
                else { console.log('Email sent: ' + info.response); }
            });
        });
    } catch (err) {
        console.error('An error occurred while running the Cron job:', err);
    }
}, null, true, timezone);

module.exports = dueDateJob;
