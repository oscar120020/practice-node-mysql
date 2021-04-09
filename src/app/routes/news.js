const dbConection = require('../../config/dbConection')

module.exports = app => {
    const conection = dbConection()
    app.get('/', (req, res) => {
        conection.query('SELECT * FROM news', (err, result) => {
            res.render('news/news', {
                news: result
            })
        })
    })

    app.post('/news', (req, res) => {
        const { title, news } = req.body
        conection.query('INSERT INTO news SET?',{
            tittle: title,
            news
        }, (err, result) => {
            res.redirect('/')
        })
    })

}