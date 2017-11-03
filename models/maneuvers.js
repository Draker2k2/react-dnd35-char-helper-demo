const mongoose = require('mongoose');

const maneuversSchema = new mongoose.Schema({
  id: { type: String },
  name: String,
  description: { type: String, default: '' },
  action: String,
  class: { type: String, default: '-' },
  bonuses: {
    type: Array, default: [],
  },
  checked: { type: Boolean, default: false },
});

module.exports = mongoose.model('maneuversSchema', maneuversSchema, 'maneuversSchema');
