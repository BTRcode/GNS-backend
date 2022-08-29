const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Domain = db.define('Domain',{
    id : {
        autoIncrement: true,
        type : Sequelize.STRING,
        primaryKey: true
    },
    Domain_name : {
        type : Sequelize.STRING,
    }
})

module.exports = Domain