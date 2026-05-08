import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/dbconnection.js'
dotenv.config({
  path: './.env',
})

const port = process.env.PORTNAME || 3000

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch(error => {
    console.error('MongoDB connection error', error)
    process.exit(1)
  })
