const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

// username = process.env.USER
// password = process.env.PASS
// database = process.env.DB

// console.log(process.env)
// console.log(username, password, database)

const sequelize = new Sequelize('CAFE_MGMT', "root", "password", {
    host: 'localhost', dialect: 'mysql', define: {
        freezeTableName: true
    }
})

// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection is successful...')
//     })
//     .catch((err) => {
//         console.log('Error occured ', err)
//     })

module.exports = sequelize