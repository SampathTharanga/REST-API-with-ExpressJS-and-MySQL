require('dotenv').config()

const config = {
    db: {
        host: process.env.DB_HOST || 'freedb.tech',
        user: process.env.DB_USER || 'freedbtech_Sampath',
        password: process.env.DB_PASS || '19910710',
        database: process.env.DB_NAME || 'freedbtech_studentdb'
    },
    listPerPage: process.env.LIST_PER_PAGE || 10
}


module.exports = config