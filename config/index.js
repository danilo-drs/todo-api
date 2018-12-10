module.exports = {
  db: {
    operatorsAliases: false,
    dialect: 'postgres',
    name: 'todo',
    host: process.env.PG_HOST || 'localhost',
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASS || 'danilo',
    database: process.env.PG_DB || 'todo',
    port: process.env.PG_PORT || 5432,
    pool: {
      min: process.env.PG_POLL_MIN || 0,
      max: process.env.PG_POLL_MAX || 50,
      idle: process.env.PG_POLL_IDLE || 10000,
    },
    // eslint-disable-next-line no-console
    logging: false,
    timezone: 'America/Sao_Paulo',
  },
};
