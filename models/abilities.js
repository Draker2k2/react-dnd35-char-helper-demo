const mongoose = require('mongoose');

const abilitySchema = new mongoose.Schema({
  id: { type: String },
  name: String,
  bonuses: {
    type: Array,
    default: [
      { type: 'bonus', value: 0 },
      { type: 'quest', value: 1 },
      { type: 'shield', value: 0 },
      { type: 'dodge', value: 0 },
      { type: 'enhancement', value: 0 },
      { type: 'inherit', value: 0 },
      { type: 'racial', value: 0 },
      { type: 'deflection', value: 0 },
      { type: 'armor', value: 0 },
      { type: 'naturalArmor', value: 0 },
      { type: 'competence', value: 0 },
      { type: 'insight', value: 0 },
      { type: 'resistance', value: 0 },
      { type: 'sacred', value: 0 },
      { type: 'profane', value: 0 },
      { type: 'divine', value: 0 },
    ],
  },
  totalBonus: { type: Number, default: 0 },
  initialValue: { type: Number, default: 0 },
  levelValue: {
    type: Array, default: [0, 0, 0],
  },
});

module.exports = mongoose.model('abilitySchema', abilitySchema, 'abilitySchema');
