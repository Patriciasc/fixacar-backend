// https://www.npmjs.com/package/mongoose-seed

require('dotenv').config()

const bcrypt = require('bcrypt')
const seeder = require('mongoose-seed');

seeder.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB}`, function() {

  // Load Mongoose models
  seeder.loadModels([
    'api/models/workshops.model.js',
    'api/models/users.model.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['workshop','user'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });

  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'workshop',
    'documents': [
      {
        name: 'Taller Tana',
        address: 'Calle Mesa y Lopez,',
        schedule: '24/7',
        telephone: '123 123 123',
        image_url: 'https://fotos02.laprovincia.es/2020/01/27/1024x341/tanausu-pino.jpg',
        vehicle_car: true,
        vehicle_moto: false,
        service_mechanic: true,
        service_bp: true,
        service_electricity: true,
        pt_general: 5,
        pt_price: 1
      },
      {
        name: 'Taller Tana Super Rating',
        address: 'Calle Mesa y Lopez,',
        schedule: '24/7',
        telephone: '123 123 123',
        image_url: 'https://fotos02.laprovincia.es/2020/01/27/1024x341/tanausu-pino.jpg',
        vehicle_car: true,
        vehicle_moto: false,
        service_mechanic: true,
        service_bp: true,
        service_electricity: true,
        pt_general: 1,
        pt_price: 5
      }
    ]
  },
  {
    'model': 'user',
    'documents': [
      {
        name: 'Fer Martin',
        email: 'fer@fer.com',
        password:  bcrypt.hashSync('123123', 10),
        telephone: '321 321 321',
        profile_url: 'https://1.bp.blogspot.com/-AZE5ZINbmpw/VyjFXmfYHLI/AAAAAAAAFeI/JKAXVk3WkFcTQm66RhRtmlDwsqW3jJl_gCK4B/s640/Captura%2Bde%2Bpantalla%2B2016-05-03%2Ba%2Blas%2B16.29.16.png',
      }
    ]
  }
];
