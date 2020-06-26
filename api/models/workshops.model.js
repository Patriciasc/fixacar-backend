const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  mechanic: {
    type: Boolean,
    required: true
  },
  bp: {
    type: Boolean,
    required: true
  },
  electricity: {
    type: Boolean,
    required: true
  }
})

const vehicleSchema = new mongoose.Schema({
  car: {
    type: Boolean,
    required: true
  },
  moto: {
    type: Boolean,
    required: true
  }
})

const workshopSchema = new mongoose.Schema({
  ratings: {
    type: [mongoose.Types.ObjectId],
    required: false
  },
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
  service: {
    type: serviceSchema,
    required: [true, 'Service is required']
  },
  vehicle: {
    type: vehicleSchema,
    required: [true, 'vehicle is required']
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
  }
})

const workshopModel = mongoose.model('workshop', workshopSchema)
module.exports = workshopModel
