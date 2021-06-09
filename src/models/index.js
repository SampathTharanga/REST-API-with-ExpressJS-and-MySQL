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

//SELECT ALL DATA IN THE TABLE
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


//SELECT SPECIAL STUDENT DATA IN THE TABLE
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

studentdb.update = (stuDetails, id) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE student SET name = ?, university = ?, course = ?, city = ?, create_at = ?, update_at = ? WHERE id = ?', [stuDetails.name, stuDetails.university, stuDetails.course, stuDetails.city, stuDetails.create_at, stuDetails.update_at, id], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results[0])
        })
    })
}


module.exports = studentdb