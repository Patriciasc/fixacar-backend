const router = require('express').Router()

const {
  getUserbudgets,
  updateUserBudget,
  createBudget
} = require('../controllers/budget.controller')

router.get('/', getUserbudgets)
router.put('/:budget_id', updateUserBudget)
router.post('/:workshop_id', createBudget)

module.exports = router
