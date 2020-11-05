// Include express frome node_modules
const express = require('express')
const app = express()

// Define server related variables 
const port = 3000

// Handle request and response
app.get('/language/:language', (req, res) => {
  res.send(`I love ${req.params.language}.`)
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`The server is listening on the http://localhost:${port}`)
})
