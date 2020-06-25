const router = require('express').Router()

const usersRouter = require('./users.router')
const workshopRouter = require('./workshops.router')
const budgetRouter = require('./budgets.router')
const authRouter = require('./auth.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/users', authUser, usersRouter)
router.use('/workshops', workshopRouter)
router.use('/budgets', authUser, budgetRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
