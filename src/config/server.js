const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()

// const publicPath = path.resolve(__dirname, 'src/app/public/')

// settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../app/views'))

// middlewere
app.use('/static', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


module.exports = app