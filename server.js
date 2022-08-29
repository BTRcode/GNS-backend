const express = require('express')
const app = express;
const PORT = process.env.PORT || 5000;
const Sequelize = require('sequelize');
const router = require('./router')
const db = require("./config/database.js")

db.authenticate()
    .then(() => {
        console.log("database connected successfully")
    })
    .catch((err) => {
        console.log(err);
    });


app.use('/GNS', (req, res, next) => {
    next();
}, router);


app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`)
})