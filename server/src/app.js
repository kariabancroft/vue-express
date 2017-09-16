const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Builds a basic express server
const app = express()

// logs
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Give it the HTTP verb you want it to use
// Then the endpoint
// app.get('/status', (req, res) => {
//   res.send({
//     message: 'hello world!'
//   })
// })

app.post('/register', (req, res) => {
  res.send({
    message: `Your user, ${req.body.email} was registered!`
  })
})

app.listen(process.env.PORT || 8081)
