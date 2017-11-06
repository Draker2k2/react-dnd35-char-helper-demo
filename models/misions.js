const mongoose = require('mongoose');

const misionsSchema = new mongoose.Schema({
  name: String,
  objectives: String,
  information: String,
  completed: Boolean,
});

module.exports = mongoose.model('misionsSchema', misionsSchema, 'misionsSchema');
