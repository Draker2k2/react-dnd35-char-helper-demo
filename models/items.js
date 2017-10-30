const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: { type: String },
  name: String,
  description: { type: String, default: '' },
  slot: { type: String, default: '-' },
  bonuses: {
    type: Array, default: [],
  },
  checked: { type: Boolean, default: false },
});

module.exports = mongoose.model('itemSchema', itemSchema, 'itemSchema');
