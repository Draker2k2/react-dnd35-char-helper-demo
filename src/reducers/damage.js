import { ACTION_TYPES } from '../actions/damage';

const INITIAL_STATE = {
  staticBonuses: [
      { type: 'weapon', value: 1, from: 'ShortSword +1' },
      { type: 'Dexterity', value: 0, from: 'Dexterity Mod. ShadowBlade Feat' },
      { type: 'Intelligence', value: 0, from: 'Intelligence Mod. Swashbuckler Class Feature.' },
      { type: 'Burning Blade', value: 0, from: 'Initiator Level. Swordsage Boost.' },
      { type: 'Charge', value: 0, from: 'Charge.' },
  ],
  dicesBonuses: [
    { type: 'Weapon', value: 1, from: 'ShortSword +1' },
    { type: 'Burning Blade', value: 0, from: 'Burning Blade Swordsage Boost' },
  ],
  shadowHandStance: false,
  totalStaticBonus: 0,
  totalDicesBonus: 0,
  staticUndeadModifier: 2,
  undeadDicesBonus: 3,
  loading: false,
  error: false,
};

export function recalculateTotalBonus(state) {
  state.totalStaticBonus = 0;
  state.staticBonuses.map(staticBonus => (staticBonus.value > 0 ? state.totalStaticBonus += staticBonus.value : 0));
  if (state.shadowHandStance === false) {
    state.totalStaticBonus -= state.staticBonuses[1].value;
  }

  state.totalDicesBonus = 0;
  state.dicesBonuses.map(dicesBonus => (dicesBonus.value > 0 ? state.totalDicesBonus += dicesBonus.value : 0));
}

function increaseStaticBonusXX(state, type, value) {
  state.staticBonuses.filter(bonus => (bonus.type === type ? bonus.value = value : false));
}

function decreaseStaticBonusXX(state, type) {
  state.staticBonuses.filter(bonus => (bonus.type === type ? bonus.value = 0 : false));
}

function increaseDicesBonusXX(state, type, value) {
  if (type === 'bonus') {
    state.dicesBonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value += value : false));
  } else {
    state.dicesBonuses
      .filter(bonus => (bonus.type === type && bonus.value < Math.abs(value) ? bonus.value += value : 0));
  }
}

function decreaseDicesBonusXX(state, type, value) {
  if (type === 'bonus') {
    state.dicesBonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value -= value : false));
  } else {
    state.dicesBonuses
      .filter(bonus => (bonus.type === type && bonus.value === value ? bonus.value -= value : 0));
  }
}

function shadowHandStanceStatus(state, checked) {
  state.shadowHandStance = !checked;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, damage: action.payload, loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.INCREASE_STATIC_BONUS: {
      if (action.payload.bonusType === 'ShadowHand Stance') {
        shadowHandStanceStatus(state, action.payload.checked);
      } else if (action.payload.checked === true) {
        decreaseStaticBonusXX(state, action.payload.bonusType);
        // defenseToIncrement.inherentValue -= action.payload.value;
      } else {
        increaseStaticBonusXX(state, action.payload.bonusType, action.payload.value);
        // defenseToIncrement.inherentValue += action.payload.value;
      }

      recalculateTotalBonus(state);
      return { ...state };
    }

    case ACTION_TYPES.INCREASE_DICES_BONUS: {
      if (action.payload.checked === true) {
        decreaseDicesBonusXX(state, action.payload.bonusType, action.payload.value);
        // defenseToIncrement.inherentValue -= action.payload.value;
      } else {
        increaseDicesBonusXX(state, action.payload.bonusType, action.payload.value);
        // defenseToIncrement.inherentValue += action.payload.value;
      }

      recalculateTotalBonus(state);
      return { ...state };
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
