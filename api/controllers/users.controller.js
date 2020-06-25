// const UserModel = require('../models/users.model')

module.exports = {
  getUserById,
  deleteUserById,
  updateUser
}

function getUserById (req, res) {
  console.log('User: getUserById')
  console.log(res.locals.user)
}

function deleteUserById (req, res) {
  console.log('User: deleteUserById')
}

function updateUser (req, res) {
  console.log('User: updateUser')
}
