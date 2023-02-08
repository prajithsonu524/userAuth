require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.text())
const authRoutes = require('./src/routes/authRoutes')
const { client } = require('./src/database/redis')

client.connect()

client.on('error', err => console.log('Redis Client Error', err))
app.use('/auth', authRoutes)
app.listen(5000, () => console.log('Started on port 5000'))
