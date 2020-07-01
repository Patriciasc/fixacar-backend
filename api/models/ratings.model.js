const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: [true, 'User is required']
  },
  pt_general: {
    type: Number,
    required: [true, 'Score_general is required']
  },
  pt_price: {
    type: Number,
    required: [true, 'Score_price is required']
  },
  pt_quality: {
    type: Number,
    required: [true, 'Score_quality is required']
  },
  comment: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const ratingModel = mongoose.model('rating', ratingSchema)
module.exports = ratingModel
