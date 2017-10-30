import { ACTION_TYPES } from '../actions/defenses';

const INITIAL_STATE = {
  defenses: [],
  loading: false,
  error: false,
};

export function recalculateTotalBonus(state) {
  state.defenses.map(defense => defense.totalBonus = 0);
  state.defenses.filter(defense => defense.id !== 'AC').map(defense => defense.classModifiers.map(classModifier =>
    defense.totalBonus += +classModifier.value,
  ));
  state.defenses.map(defense => defense.bonuses.map(bonus =>
    defense.totalBonus += +bonus.value,
  ));
}


function increaseBonusXX(defenseToIncrement, type, value) {
  if (type === 'bonus') {
    defenseToIncrement.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value += value : false));
  } else if (type === 'dodge') {
    defenseToIncrement.bonuses.filter(bonus => (bonus.type === 'dodge' ? bonus.value += value : false));
  } else {
    defenseToIncrement.bonuses
      .filter(bonus => (bonus.type === type && bonus.value < Math.abs(value) ? bonus.value = value : 0));
  }
}

function decreaseBonusXX(defenseToIncrement, type, value) {
  if (type === 'bonus') {
    defenseToIncrement.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value -= value : false));
  } else if (type === 'dodge') {
    defenseToIncrement.bonuses.filter(bonus => (bonus.type === 'dodge' ? bonus.value -= value : false));
  } else {
    defenseToIncrement.bonuses
      .filter(bonus => (bonus.type === type && bonus.value === value ? bonus.value -= value : 0));
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, defenses: action.payload, loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.INCREMENT_DEFENSE: {
      const restOfDefenses = state.defenses.filter(item =>
        item.id !== action.payload.defenseName);
      const defenseToIncrement = state.defenses
        .filter(item => item.id === action.payload.defenseName)[0];
      if (action.payload.checked === true) {
        decreaseBonusXX(defenseToIncrement, action.payload.bonusType, action.payload.value);
        // defenseToIncrement.inherentValue -= action.payload.value;
      } else {
        increaseBonusXX(defenseToIncrement, action.payload.bonusType, action.payload.value);
        // defenseToIncrement.inherentValue += action.payload.value;
      }
      recalculateTotalBonus(state);
      return { ...state,
        defenses: [...restOfDefenses, defenseToIncrement].sort((a, b) => a.name > b.name) };
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
