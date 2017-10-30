const mongoose = require('mongoose');

const classFeaturesSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: { type: String, default: '' },
  bonuses: {
    type: Array, default: [],
  },
  checked: { type: Boolean, default: false },
});

module.exports = mongoose.model('classFeaturesSchema', classFeaturesSchema, 'classFeaturesSchema');
