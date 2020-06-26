const router = require('express').Router()
const { authUser } = require('../utils/index')

const {
  getAllWorkshops,
  getWorkshopById,
  getRatings,
  addRating
} = require('../controllers/workshops.controller')

router.get('/', getAllWorkshops)
router.get('/:id', getWorkshopById)
router.get('/:id/ratings', getRatings)
router.post('/:id/ratings', authUser, addRating)

module.exports = router
