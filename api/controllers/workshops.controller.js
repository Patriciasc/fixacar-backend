const WorkshopModel = require('../models/workshops.model')

module.exports = {
  getAllWorkshops,
  getWorkshopById,
  getRatings,
  addRating,
  addWorkshop
}

function getAllWorkshops (req, res) {
  console.log('Workshop: getAllWorkshops')
}

function getWorkshopById (req, res) {
  console.log('Workshop: getWorkshopById')
}

function getRatings (req, res) {
  console.log('Workshop: getRatings')
}

function addRating (req, res) {
  console.log('Workshop: AddRating')
}

function addWorkshop (req, res) {
  WorkshopModel
    .create(req.body)
    .then(response => res.json(response))
}