const express = require('express');
const passport = require('passport');

const { sequelize } = require('./models');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

require('./middlewares/passport-local-strategy');

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use('/personnel', userRoutes);
app.use('/tasks', passport.authenticate('jwt', { session: false }), taskRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Hello there' });
});

app.listen(5000, async () => {
  await sequelize.authenticate();
  console.log('Server is running');
  console.log('Database synced');
});
