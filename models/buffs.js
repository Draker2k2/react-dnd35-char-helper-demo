const mongoose = require('mongoose');

const buffsSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: { type: String, default: '' },
  bonuses: {
    type: Array, default: [],
  },
  checked: { type: Boolean, default: false },
});

module.exports = mongoose.model('buffsSchema', buffsSchema, 'buffsSchema');
