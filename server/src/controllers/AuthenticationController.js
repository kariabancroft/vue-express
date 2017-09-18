// Controllers used for declaring endpoints

const {User} = require('../models')

// req - request
// res - response
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      // Question: What kind of additional data does this err object contain?
      res.status(400).send({
        error: 'The email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      // Good to go!
      res.send(user.toJSON())
    } catch (err) {
      // Question: What kind of additional data does this err object contain?
      res.status(500).send({
        error: 'An error has occurred trying to log in.'
      })
    }
  }
}
