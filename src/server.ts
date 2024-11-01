// This is your server file :)

// Import packages
import express, { Request, Response } from 'express'
import pageRouter from './routes/page.routes'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express()

// Set view engine to EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))) // Set public dir
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', pageRouter)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})
