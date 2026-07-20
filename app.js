const express = require('express')
const app = express()

const {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement
} = require('./utils')

// Use static server to serve the Express Yourself Website
app.use(express.static('public'))

app.use((req, res, next) => {
  console.log('Request received');
});


// Import and mount the expressionsRouter
const expressionsRouter = require('./routes/expressions.js')
app.use('/expressions', expressionsRouter)

// Import and mount the expressionsRouter
const animalsRouter = require('./routes/animals.js')
app.use('/animals', animalsRouter)

// export app for use in main.js and for testing
module.exports = {
  app
}
