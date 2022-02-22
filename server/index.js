const express = require('express');

const { sequelize, User } = require('./models');
const personnelRoutes = require('./routes/personel');
const taskRoutes = require('./routes/task');

const app = express();

app.use(express.json());

app.use('/personnel', personnelRoutes);
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Hello there' });
});

app.listen(5000, async () => {
  await sequelize.authenticate();
  console.log('Server is running');
  console.log('Database synced');
});
