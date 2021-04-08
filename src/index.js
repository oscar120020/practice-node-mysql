const app = require('./config/server')

require('./app/routes/news')(app)


app.listen(app.get('port'), (req, res) =>{
    console.log('server on port ', app.get('port'))
})