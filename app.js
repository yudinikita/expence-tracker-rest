const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
})