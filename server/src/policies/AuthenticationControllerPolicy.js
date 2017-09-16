// Express middleware for data validation

const Joi = require('joi')


module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(), // Joi has built-in validations we can use like this email
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    // Validate the data against the schema
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the follow characters: lower case, upper case, numerics
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters in length
            `
          })
        default:
      }
    } else {
      next() // when it hits next, it will just continue through the control flow and continue on to the controller
    }
  }
}
