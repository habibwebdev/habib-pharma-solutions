import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

// express app
const app = express()

// middleware for morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// allows json data body
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Habib Pharma Solutions')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT}, Url: http://localhost:${PORT}`
  )
)
