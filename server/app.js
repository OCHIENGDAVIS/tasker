const express = require('express');
const passport = require('passport');
require('dotenv').config();
console.log(process.env);

const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

require('./middlewares/passport-local-strategy');

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use('/personnel', userRoutes);
app.use('/tasks', passport.authenticate('jwt', { session: false }), taskRoutes);

module.exports = app;