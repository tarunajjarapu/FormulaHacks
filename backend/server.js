const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const { connectDB } = require('./config/db')
const cors = require('cors');

const app = express()
app.use(cors());

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use('/user', require('./routes/userRoutes'))
app.use('/streak', require('./routes/streakRoutes'))
app.use('/question', require('./routes/questionRoutes'))

app.get('/', (req, res) => {
    res.send("<h2>Hi there</h2>")
})

app.listen(port, () => console.log(`Server started on port ${port}`))