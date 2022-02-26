const express = require('express');
const passport = require('passport');
require('dotenv').config();

const userRoutes = require('./routes/api/user');
const taskRoutes = require('./routes/api/task');
const indexRoute = require('./routes/');

require('./middlewares/passport-local-strategy');

const app = express();

app.use(express.json());
app.use(passport.initialize());

// API Routes
app.use('/api/personnel', userRoutes);
app.use(
  '/api/tasks',
  passport.authenticate('jwt', { session: false }),
  taskRoutes
);

// IndexRoute
app.get('/', indexRoute);

module.exports = app;
