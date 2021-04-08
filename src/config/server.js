const express = require('express')
const path = require('path')
const bodyyParser = require('body-parser')


const app = express()

// settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../app/views'))

// middlewere
app.use(bodyyParser.urlencoded({extended: false}))


module.exports = app