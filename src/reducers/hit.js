import { ACTION_TYPES } from '../actions/hit';

const INITIAL_STATE = {
  bab: 6, // SB3 + F2 + R2
  bonuses: [
      { type: 'bonus', value: 0 },
      { type: 'flanking', value: 0 },
      { type: 'featsBonus', value: 0 },
      { type: 'enhancement', value: 0 },
      { type: 'inherit', value: 0 },
      { type: 'insight', value: 0 },
      { type: 'sacred', value: 0 },
      { type: 'profane', value: 0 },
      { type: 'divine', value: 0 },
  ],
  haveExtraAttacks: false,
  extraAttacks: [
    { from: String, hitBonus: Number },
    { from: String, hitBonus: Number },
    { from: String, hitBonus: Number },
  ],
  weapon_1: 0,
  weapon_2: 0,
  totalBonus_w1: 0,
  totalBonus_w2: 0,
  undeadModifier_w1: 2,
  undeadModifier_w2: 2,
  loading: false,
  error: false,
};

export function recalculateTotalBonus(state) {
  let totalCommonBonus = 0;
  totalCommonBonus += state.bab;
  state.bonuses.map(bonus => (bonus.value > 0 ? totalCommonBonus += bonus.value : 0));
  // state.feats.map(feat => (feat.value > 0 ? totalCommonBonus += feat.value : 0));
  // state.classFeatures.map(classFeature => (classFeature.value > 0 ? totalCommonBonus += classFeature.value : 0));
  // state.buffs.map(buff => (buff.value > 0 ? totalCommonBonus += buff.value : 0));

  state.totalBonus_w1 = state.weapon_1 + totalCommonBonus;
  state.totalBonus_w2 = state.weapon_2 + totalCommonBonus;
}

/*
function addFeatBonus(state, featName, bonusType, value) {
  const featToModify = state.feats.filter(feat => feat.name === featName)[0];
  if (featToModify !== 'undefined') {
    featToModify.bonuses.map(bonus => bonus.bonusType === bonusType ? (bonus.value < value ? bonus.value = value : 0) : state.)
  }
 // const featsToModify = state.feats.filter(feat => feat.bonusType === bonusType);

  defenseToIncrement.bonuses
    .filter(bonus => (bonus.type === type && bonus.value < Math.abs(value) ? bonus.value = value : 0));
}
*/

function increaseBonusXX(state, type, value) {
  if (type === 'bonus') {
    state.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value += value : false));
  } else {
    state.bonuses
      .filter(bonus => (bonus.type === type && bonus.value < Math.abs(value) ? bonus.value = value : 0));
  }
}

function decreaseBonusXX(state, type, value) {
  if (type === 'bonus') {
    state.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value -= value : false));
  } else {
    state.bonuses
      .filter(bonus => (bonus.type === type && bonus.value === value ? bonus.value -= value : 0));
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, hit: action.payload, loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.INCREMENT_HIT: {
      if (action.payload.checked === true) {
        decreaseBonusXX(state, action.payload.bonusType, action.payload.value);
        // defenseToIncrement.inherentValue -= action.payload.value;
      } else {
        increaseBonusXX(state, action.payload.bonusType, action.payload.value);
        // defenseToIncrement.inherentValue += action.payload.value;
      }
      recalculateTotalBonus(state);
      return { ...state };
    }

    case ACTION_TYPES.ADD_EXTRA_ATTACK: {
      let payload = '';
      state.extraAttacks.filter(extraAttack => (extraAttack.from === action.payload.from ? false :
        payload = { from: action.payload.from, hitValue: action.payload.hitValue }
      ));
      return { ...state, extraAttacks: [state.extraAttacks, payload], haveExtraAttacks: true };
    }

    case ACTION_TYPES.REMOVE_EXTRA_ATTACK: {
      state.extraAttacks.filter(extraAttack => (extraAttack.from === action.payload.from ?
        (extraAttack.from = '', extraAttack.hitBonus = 0) : false
      ));
      return { ...state, haveExtraAttacks: false };
    }

    //------------------------------------------------------------------------------
    case ACTION_TYPES.CALCULATE_BONUS:
      recalculateTotalBonus(state);
      return { ...state };

    //------------------------------------------------------------------------------
    default:
      return state;
  }
}
