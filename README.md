# tasker

A task scheduling application written in (Nodejs + Express), Sequalize, Postgress and Passport js.

## Testing the Poject locally

1. Preparing your databases
   1. create a postgres database instance on your machine
   2. create a new folder inside `server` named `config`
   3. Inside the `config` folder, create an `index.js` file and a `config.json` file
   4. Populate the `config.json` file with postgress database credentials as follows:.
      `{ "development": { "username": "db-user", "password": "db-password", "database": "db-name", "host": "db-host", "dialect": "db-dialect" }, "test": { "username": "db-user", "password": "db-password", "database": "db-name", "host": "db-host", "dialect": "db-dialect" } }`
2. Migrate the Database
   1. run `sequelize db:migrate`
3. Inside the `indexjs` of the `config foder` add the following:.
   `module.exports = { JWT_SECRET: 'super-secret-key', }; `
4. Running the Project
   1. cd `server` folder and run `npm install` and `npm start`

## Available Routes

1. Register a User
   1. `/personnel/register`
      payload `{"email": "mail", "firstname": "mike", "lastname": "brown", "password":"password", "phone": "22222"}`
2. Login user
   1. `/personnel/register`
   2. provide `{"phone":"phone", "password", "password"}` as payload
3. Create a task
   1. `/personnel/register`
   2. it requires a `Bearer <TOKEN>` in the header
4. Get assigned tasks
   1. `tasks/assigned`
      1. it requires a `Bearer <TOKEN>` in the header

## Running Tests

Run `npm run test` inside the server folder
