const path = require('path');
const { sequelize } = require('./models');
const app = require('./app');

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log('Server is running');
  console.log('Database synced');
});
