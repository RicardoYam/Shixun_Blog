// require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/shixun_blog")
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const blogsRouter = require('./routes/blogs')
app.use('/blogs', blogsRouter)

app.listen(3000, () => {console.log("server started on port 3000")})