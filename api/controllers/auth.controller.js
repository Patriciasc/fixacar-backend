const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function signup (req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.user_password, 10)
  UserModel.create({
    name: req.body.user_name,
    email: req.body.user_email,
    password: hashedPassword
  }).then(user => {
    const userData = { name: user.name, email: user.email }
    const token = jwt.sign(userData, process.env.SECRET, { expiresIn: '30m' })
    res.json({ token, ...userData })
  }).catch(error => res.status(403).json({ error: error.errmsg }))
}

function login (req, res) {
  UserModel
    .findOne({ email: req.body.user_email })
    .then(user => {
      if (!user) { res.json({ error: 'tu email no sirve aqui, rufián!' }) } else {
        if (bcrypt.compareSync(req.body.user_password, user.password)) {
          const userData = { name: user.name, email: user.email }
          const token = jwt.sign(userData, process.env.SECRET, { expiresIn: '30m' })
          res.json({ token, ...userData })
        } else {
          res.json({ error: 'tu password no sirve aqui, bocaChancla!' })
        }
      }
    })
}

module.exports = { signup, login }
