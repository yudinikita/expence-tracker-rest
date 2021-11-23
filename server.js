const path = require('path')
const dotenv = require('dotenv')
const colors = require('colors')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const serveStatic = require('serve-static')
const errorMiddleware = require('./middleware/error.middleware')
const { getUserData } = require('./utils/utils')
const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require('./graphql/schema/schema')
const graphqlResolvers = require('./graphql/resolvers/resolvers')

const dotenvParse = dotenv.config({ path: './config/config.env' })
if (dotenvParse.error) {
  throw dotenvParse.error
}

const PORT = process.env.PORT || 5000

const app = express()

app.use(compression())
app.use(express.json({ extended: true }))
app.use(cookieParser())
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))
app.use(morgan('dev'))

app.use((req, res, next) => {
  if (req && req.headers.authorization) {
    req.user = getUserData(req)
  } else {
    req.user = null
  }
  next()
})

app.use(
  '/graphql', (req, res) => {
    return graphqlHTTP({
      schema: graphqlSchema,
      rootValue: graphqlResolvers,
      graphiql: true,
      context: { req, res }
    })(req, res)
  }
)

app.get('/', (req, res) => {
  return res.json({
    data: 'Server started'
  }.data)
})

if (process.env.NODE_ENV === 'production') {
  //app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.use('/', serveStatic(path.join(__dirname, 'client', 'build'), { index: 'index.html' }))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use(errorMiddleware)

const start = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.magenta.bold)
      console.log(`Server ready at http://localhost:${PORT}`.yellow.bold)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
