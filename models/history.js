const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  date: String,
  tittle: String,
  description: String,
});

module.exports = mongoose.model('historySchema', historySchema, 'historySchema');
