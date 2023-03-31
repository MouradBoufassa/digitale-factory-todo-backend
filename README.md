# Digitale Factory Todolist
This is a simple backend application for a Todo List management system built using Express.js. The application uses MongoDB as a database and JWT for authentication.

## Get Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
To run this application, you will need the following:

  - Node.js (version 12 or higher)
  - MongoDB Community Server OR a Cloud MongoDB Cluster

## Installing
Follow the steps below to get the application running on your system:

  - Clone the repository to your local machine:\
  `git clone https://github.com/khaledxyz/digitale-factory-todo-backend`
  
  - Navigate into the project directory:\
  `cd digitale-factory-todo-backend`

  - Install NPM dependencies:\
  `yarn`
  
  - Create an .env file in the root directory of the project and add the following environment variables: *REQUIRED
  
        [ ]NODE_ENV=DEVELOPMENT
        [ ]PORT=<NUMBER>
        [ ]CLIENT_URL=<STRING>
        [*]MONGODB_URI=mongodb://[Username:Password(optional)]@HostName:Port/?aruguments
        [*]JWT_TOKEN_SECRET=<STRING>
        
        // These settings are exclusively required for utilizing the email reminder feature. 
        // To test it out, you may obtain a free SMTP server from Sendinblue.com.
        [ ]TRANSPORTER_HOST=<STRING>
        [ ]TRANSPORTER_PORT=<NUMBER>
        [ ]TRANSPORTER_AUTH_USER=<STRING>
        [ ]TRANSPORTER_AUTH_PASSWORD=<STRING>
        
        // For more information about this please take a look at `./config/cron.js`
        [ ]TODO_REMINDER_INTERVAL=<NUMBER>


  - Start the application:\
  `yarn dev` => for DEVELOPMENT \
  `yarn start` => for PRODUCTION

 ## API Documentation

The application has an interactive API documentation that can be accessed at `http://localhost:<port>/api/docs`. The documentation is generated using Swagger UI and provides an overview of all the available endpoints, their input parameters, and output responses.

You can also find a summary of the available endpoints in the table below:
| Endpoint           | Method | Description                            |
|--------------------|--------|----------------------------------------|
| /api/users         | POST   | Create a new user                      |
| /api/auth          | POST   | Authenticate user and return JWT token |
| /api/todos         | GET    | Get all todos for authenticated user   |
| /api/todos         | POST   | Create a new todo                      |
| /api/todos/:id     | PATCH  | Update a todo by its ID                |
| /api/todos/reorder | PUT    | Reorders a todo                        |
