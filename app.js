const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const colors = require('colors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' })

connectDB()

const auth = require('./routes/auth.routes')
const transactions = require('./routes/transactions.routes')
const categories = require('./routes/categories.routes')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/v1/auth', auth)
app.use('/api/v1/transactions', transactions)
app.use('/api/v1/categories', categories)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Сервер запущен в режиме "${process.env.NODE_ENV}" на порту "${PORT}"...`.magenta.bold);
})
