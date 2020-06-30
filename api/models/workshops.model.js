const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({

})

const vehicleSchema = new mongoose.Schema({

})

const workshopSchema = new mongoose.Schema({
  ratings: [{
    type: mongoose.Types.ObjectId,
    ref: 'rating'
  }],
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  schedule: {
    type: String,
    required: [true, 'Schedule is required']
  },
  telephone: {
    type: String,
    required: [true, 'Telephone is required']
  },
  image_url: {
    type: String,
    required: [true, 'your workshop image is required']
  },
  pt_general: {
    type: Number
  },
  pt_price: {
    type: Number
  },
  pt_quality: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  vehicle_car: {
    type: Boolean,
    default: true
  },
  vehicle_moto: {
    type: Boolean,
    default: false
  },
  service_mechanic: {
    type: Boolean,
    default: true
  },
  service_bp: {
    type: Boolean,
    default: false
  },
  service_electricity: {
    type: Boolean,
    default: false
  }
})

const workshopModel = mongoose.model('workshop', workshopSchema)
module.exports = workshopModel
