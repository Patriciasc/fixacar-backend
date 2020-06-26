const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getUserById,
  deleteUserById,
  updateUser
}

function getUserById (req, res) {
  UserModel
    .findById(res.locals.user._id, { _id: 0, __v: 0, createdAt: 0, password: 0 })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .remove({ _id: res.locals.user._id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
