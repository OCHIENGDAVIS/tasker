const express = require('express');
const { sequelize, User } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello there' });
});

app.post('/users', async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.json();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.listen(5000, async () => {
  await sequelize.authenticate();
  console.log('Server is running');
  console.log('Database synced');
});
