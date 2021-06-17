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


/*
let studentdb = (student) => {
    this.name = student.name
    this.university = student.university
    this.course=student.course
    this.city = student.city
    this.create_at = new Date()
    this.update_at = new Date()
}*/

//GET ALL DATA IN THE TABLE
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


//ADD NEW STUDENT
studentdb.addNew = ([data])=> {
    return new Promise ((resolve, reject) => {
        pool.query(`INSERT INTO student(name, university, course, city, create_at, update_at) VALUES (?)`, [data] , (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve([results[0]])
        })
    })
}


//UPDATE STUDENT DETAILS
studentdb.update = (data, id) => {
    return new Promise((resolve, reject) => {
        //console.log(data) 
        pool.query('UPDATE student SET name = ?, university = ?, course = ?, city = ?, update_at = ? WHERE id = ?', [data.name, data.university, data.course, data.city, new Date(), id], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results[0])
        })
    })
}


//DELETE STUDENT DETAILS
studentdb.delete = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM student WHERE id=?`, [id], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = studentdb