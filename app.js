// // Include http module from Node.js
// const http = require('http')

// // Define server related variables
// const hostname = 'localhost'
// const port2 = 2000

// // Handle request and response
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('This is a server using http module from Node.js')
// })

// // Start and listen to the server
// server.listen(port2, hostname, () => {
//   console.log(`The server is listening on http://${hostname}:${port2}.`)
// })


// Include express from node_modules
// const express = 
const app = require('express')()
// const app = express()

// Define server related variables
const port3 = 3000

// root => This is root.
app.get('/', (req, res) => {
  res.send('This is root.')
})

// /food => My favorite food is watermelon.
app.get('/food', (req, res) => {
  res.send('My favorite food is watermelon.')
})

// /restaurant/Japanese => Do you like Japanese food ?
app.get('/restaurant/Japanese', (req, res) => {
  res.send('Do you like Japanese food ?')
})

// Start and listen to the server
app.listen(port3, () => {
  console.log(`The server is listening on http://localhost:${port3}`)
})
