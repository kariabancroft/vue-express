const AuthenticationController = require('./controllers/AuthenticationController')

// Set up the route to point to the appropriate controller action
module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
}
