const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('greenlightstaging', null, null, {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      trustedConnection: true, // For Windows Authentication
      // Other options as needed
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit process with failure
  });
