const mysql = require('mysql')


module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12002',
        database: 'news_portal'
    })
} 

