// config/database.js
module.exports = {
    development: {
      username: 'root',
      password: '',
      database: 'dorcas',
      host: 'localhost',
      dialect: 'mysql', // ou 'mysql', 'sqlite', etc.
      logging: false, // Desativa o log de queries SQL
    },
    test: {
      username: 'root',
      password: '',
      database: 'nome_do_banco_teste',
      host: 'localhost',
      dialect: 'mysql',
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: false,
    },
  };
