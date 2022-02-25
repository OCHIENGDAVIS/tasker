const { sequelize } = require('./models');
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log('Server is running');
  console.log('Database synced');
});
