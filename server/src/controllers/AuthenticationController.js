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
  }
}
