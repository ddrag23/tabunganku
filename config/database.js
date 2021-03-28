import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config()

const connect = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

export default connect.promise()

