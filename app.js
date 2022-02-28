const express = require('express');
const path = require('path');
const passport = require('passport');
require('dotenv').config();

const userRoutes = require('./routes/api/user');
const taskRoutes = require('./routes/api/task');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
