const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: false
  },
  profile_url: {
    type: String,
    required: false,
    default: 'https://www.eae.es/themes/custom/eae_theme/assets/img/blank-profile.png'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
