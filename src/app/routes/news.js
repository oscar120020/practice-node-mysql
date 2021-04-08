const dbConection = require('../../config/dbConection')

module.exports = app => {
    const conection = dbConection()
    app.get('/', (req, res) => {
        conection.connect(err => {
            if (err) throw err
            conection.query('SELECT * FROM news', (err, result) => {
                res.render('news/news', {
                    news: result
                })
            })
        })
    })

    app.post('/news', (req, res) => {
        console.log(res.body)
        const { title, news } = res.body
        conection.connect(err => {
            if (err) throw err
            conection.query('INSERT INTO news SET?',{
                tittle: title,
                news
            }, (err, result) => {
                res.redirect('/')
            })
        })
    })

}