const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
  id: String,
  name: String,
  keyAbility: String,
  ranks: Number,
  bonuses: {
    type: Array,
    default: [
      { type: 'bonus', value: 0 },
      { type: 'enhancement', value: 0 },
      { type: 'inherit', value: 0 },
      { type: 'racial', value: 0 },
      { type: 'competence', value: 0 },
      { type: 'insight', value: 0 },
      { type: 'sacred', value: 0 },
      { type: 'profane', value: 0 },
      { type: 'divine', value: 0 },
    ],
  },
  sinergyBonus: { type: Number, default: 0 },
  totalBonus: { type: Number, default: 0 },
});

module.exports = mongoose.model('skillsSchema', skillsSchema, 'skillsSchema');
