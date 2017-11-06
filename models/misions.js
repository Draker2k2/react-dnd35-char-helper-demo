const mongoose = require('mongoose');

const misionsSchema = new mongoose.Schema({
  name: String,
  objectives: String,
  information: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('misionsSchema', misionsSchema, 'misionsSchema');
