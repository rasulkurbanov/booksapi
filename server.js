const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 4000
const pool = require('./utils/database')


app.use(express.json())

app.get('/', async function(req, res) {
  try {
    const {rows} = await pool.query(`SELECT * FROM books`)
    console.log(rows)
    res.send(rows)
  }
  catch(err){
    console.log(err)
  }
}) 


app.post('/books',(req, res) => {
  const {author, title} = req.body
  console.log(req.body)
  try {
    pool.query(`INSERT INTO books (author, title) VALUES($1, $2)`, author, title)
    res.status(201).send({status: "success", message: "Book is added"})
  }
  catch(err) {
    console.error(err)
  }
})




app.listen(PORT, () => console.log(`Server running port on ${PORT}`))