# tasker

A task scheduling application written in (Nodejs + Express), Sequalize, Postgress and Passport js.

## Hosted On Heroku [API ONLY](https://afternoon-fjord-69264.herokuapp.com)

## Testing the Project localy

1. Preparing your databases
   1. create a postgres database instance on your machine
   2. run `sequelize db:init`
   3. Add the database credentials and the app JWT Secret key in the .env file
2. Migrate the Database
   1. run `sequelize db:migrate`
3.
4. Running the Project
   1. run `npm install` and `npm start`

## Available Routes

1. Register a User
   1. `/api/personnel/register`
      payload `{"email": "mail", "firstname": "mike", "lastname": "brown", "password":"password", "phone": "22222"}`
2. Login user
   1. `/api/personnel/register`
   2. provide `{"phone":"phone", "password", "password"}` as payload
3. Create a task
   1. `/api/personnel/register`
   2. it requires a `Bearer <TOKEN>` in the header
4. Get assigned tasks
   1. `/api/tasks/assigned`
      1. it requires a `Bearer <TOKEN>` in the header

## Running Tests

Run `npm run test` on the root of the project

## Running The App

Run `npm run start` on the root of the project
