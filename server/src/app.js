const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

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

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`Server started on port ${config.port}`)
  })
