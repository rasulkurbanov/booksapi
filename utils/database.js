const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'books_api',
  password: 8605774,
  port: 5432
})



module.exports = pool