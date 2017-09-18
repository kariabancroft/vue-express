const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// Set up the route to point to the appropriate controller action
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register, // call this endpoint prior to making it all the way to the controller action
    AuthenticationController.register)

  app.post('/login',
    // AuthenticationControllerPolicy.register, // call this endpoint prior to making it all the way to the controller action
    AuthenticationController.login)
}
