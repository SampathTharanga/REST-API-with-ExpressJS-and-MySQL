const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'freedb.tech',
    user: process.env.DB_USER || 'freedbtech_Sampath',
    password: process.env.DB_PASS || '19910710',
    database: process.env.DB_NAME || 'freedbtech_studentdb',
    port: process.env.DB_PORT || 3306
})


let studentdb = {}

studentdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM student', (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}


studentdb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM student WHERE id = ?', [id], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results[0])
        })
    })
}


module.exports = studentdb