const mongoose = require('mongoose');

const defenseSchema = new mongoose.Schema({
  id: String,
  name: String,
  initialValue: { type: Number, default: 0 },
  inherentValue: { type: Number, default: 0 },
  enhancementValue: { type: Number, default: 0 },
});

module.exports = mongoose.model('defenseSchema', defenseSchema, 'defenseSchema');
