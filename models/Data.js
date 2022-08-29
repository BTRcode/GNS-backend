const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Data = db.define('Data',{
    id : {
        autoIncrement : true,
        type : Sequelize.STRING,
        primaryKey: true
    },
    subdomain : {
        type : Sequelize.STRING
    },
    basedomain_id : {
        type : Sequelize.STRING
    }
})

module.exports = Data