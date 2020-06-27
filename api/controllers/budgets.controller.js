const BudgetModel = require('../models/budgets.model')
const { handleError } = require('../utils')

module.exports = {
  getUserbudgets,
  updateUserBudget,
  createBudget
}

function getUserbudgets (req, res) {
  BudgetModel.find({ user: res.locals.user._id })
    .then(budgets => res.json(budgets))
    .catch(err => handleError(err, res))
}

function updateUserBudget (req, res) {
  BudgetModel
    .findByIdAndUpdate(req.params.budget_id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createBudget (req, res) {
  req.body.user = res.locals.user._id
  req.body.workshop = req.params.workshop_id
  BudgetModel
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
