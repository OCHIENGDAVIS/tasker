const { sequelize } = require('./models');
const app = require('./app');

app.listen(5000, async () => {
  await sequelize.authenticate();
  console.log('Server is running');
  console.log('Database synced');
});
