const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: [true, 'User is required']
  },
  workshop: {
    type: mongoose.Types.ObjectId,
    required: [true, 'User is required']
  },
  link: {
    type: String
  },
  status: {
    type: String,
    enum: ['accepted', 'rejected', 'pending']
  },
  price: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const budgetModel = mongoose.model('budget', budgetSchema)
module.exports = budgetModel
