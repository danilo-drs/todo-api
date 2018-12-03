module.exports = {
  db: {
    operatorsAliases: false,
    dialect: 'postgres',
    name: 'todo',
    host: 'localhost',
    username: 'postgres',
    password: 'danilo',
    database: 'todo',
    port: 5432,
    pool: {
      min: 0,
      max: 50,
      idle: 10000,
    },
    // eslint-disable-next-line no-console
    logging: console.log,
    timezone: 'America/Sao_Paulo',
  },
};
