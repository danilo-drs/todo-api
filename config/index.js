module.exports = {
    db: {
        operatorsAliases: false,
        dialect: 'postgres',
        name: 'todo',
        host: 'localhost',
        username: 'postgres',
        password: 'danilo',
        database:'todo',
        port: 5432,
        pool: {
            min: process.env.POSTGRES_CMM_MIN_POOL || 0,
            max: process.env.POSTGRES_CMM_MAX_POOL || 50,
            idle: 10000,
        },
        logging: console.log,
        timezone: 'America/Sao_Paulo',
    },
}