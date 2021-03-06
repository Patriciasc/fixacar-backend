const WorkshopModel = require('../models/workshops.model')
const UserModel = require('../models/users.model')
const RatingModel = require('../models/ratings.model')
const { handleError } = require('../utils')

module.exports = {
  getAllWorkshops,
  getWorkshopById,
  getRatings,
  addRating,
  addWorkshop
}

function getAllWorkshops (req, res) {
  var query = {}
  var orderDir = -1

  if (req.query.car) { query.vehicle_car = true }
  if (req.query.moto) { query.vehicle_moto = true }
  if (req.query.service) { query[`service_${req.query.service}`] = true }
  if (req.query.order === 'pt_price') { orderDir = 1 }

  WorkshopModel
    .find(query)
    .sort({
      [req.query.order]: orderDir
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getWorkshopById (req, res) {
  WorkshopModel
    .findById(req.params.id, { _id: 0, __v: 0, service: 0, vehicle: 0, createdAt: 0 })
    .populate('ratings')
    .then(workshop => {
      UserModel.populate(workshop.ratings, {
        path: 'user',
        select: 'name email'
      }, (err, ratingsWithUsers) => {
        if (err) { handleError(err, res) }
        workshop.ratings = ratingsWithUsers
        res.json(workshop)
      })
    })
    .catch((err) => handleError(err, res))
}

function getRatings (req, res) {
  WorkshopModel
    .findById(req.params.id, { _id: 0, ratings: 1 })
    .populate('ratings')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function addRating (req, res) {
  req.body.user = res.locals.user._id

  RatingModel
    .create(req.body)
    .then(rating => {
      WorkshopModel
        .findById(req.params.id)
        .populate('ratings')
        .then(ws => {
          ws.ratings.push(rating)

          ws.save()
            .then(wsCreated => {
              wsCreated.pt_general = wsCreated.ratings.reduce((acc, rating) => acc + rating.pt_general, 0) / wsCreated.ratings.length
              wsCreated.pt_quality = wsCreated.ratings.reduce((acc, rating) => acc + rating.pt_quality, 0) / wsCreated.ratings.length
              wsCreated.pt_price = wsCreated.ratings.reduce((acc, rating) => acc + rating.pt_price, 0) / wsCreated.ratings.length
              wsCreated.save().then(response => {
                res.json(response)
              })
            })
            .catch(err => handleError(err, res))
        })
        .catch((err) => handleError(err, res))
    })
    .catch((err) => handleError(err, res))
}

function addWorkshop (req, res) {
  WorkshopModel
    .create(req.body)
    .then(response => res.json(response))
}
