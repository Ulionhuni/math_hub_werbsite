const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // DB name
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // Password
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

