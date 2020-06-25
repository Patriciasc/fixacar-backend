const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/me', getUserById)
router.delete('/me', deleteUserById)
router.put('/me', updateUser)

module.exports = router
