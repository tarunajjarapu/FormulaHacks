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
app.use('/question', require('./routes/'))

app.listen(port, () => console.log(`Server started on port ${port}`))