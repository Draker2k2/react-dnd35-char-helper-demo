import { ACTION_TYPES } from '../actions/abilities';

const INITIAL_STATE = {
  abilities: [],
  conMod: 0,
  dexMod: 0,
  strMod: 0,
  wisMod: 0,
  intMod: 0,
  chaMod: 0,
  loading: false,
  error: false,
};

const constitutionIndex = 0;
const dexterityIndex = 1;
const strenghIndex = 2;
const wisdomIndex = 3;
const intelligenceIndex = 4;
const charismaIndex = 5;

function getTotalBonus(ability) {
  return ability.totalBonus === 'undefined' ? 0 : ability.totalBonus;
}

function calculateMod(ability) {
  return ((ability.initialValue + getTotalBonus(ability)) / 2) - 5;
}

export function recalculateModsAndBonuses(state) {
  state.abilities.map(ability => ability.totalBonus = 0);

  // SET TOME OF CONSITUTION. ya lo meteré por bbdd.
  state.abilities[0].bonuses.map(bonus => (bonus.type === 'inherit' ? (bonus.value === 0 ? bonus.value = 2 : false) : false));

  state.abilities.map(ability => ability.bonuses.map(bonus =>
    ability.totalBonus += +bonus.value,
  ));
  state.abilities.map(ability => ability.levelValue.map(levelBonus =>
    ability.totalBonus += +levelBonus,
  ));

  state.conMod = Math.trunc(calculateMod(state.abilities[constitutionIndex]));
  state.dexMod = Math.trunc(calculateMod(state.abilities[dexterityIndex]));
  state.strMod = Math.trunc(calculateMod(state.abilities[strenghIndex]) === -0.5 ? -1
  : calculateMod(state.abilities[strenghIndex]));
  state.wisMod = Math.trunc(calculateMod(state.abilities[wisdomIndex]));
  state.intMod = Math.trunc(calculateMod(state.abilities[intelligenceIndex]));
  state.chaMod = Math.trunc(calculateMod(state.abilities[charismaIndex]));
}

function increaseBonusXX(abilityToIncrement, type, value) {
  if (type === 'bonus') {
    abilityToIncrement.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value += value : false));
  } else {
    abilityToIncrement.bonuses
      .filter(bonus => (bonus.type === type && bonus.value < value ? bonus.value = value : 0));
  }
}

function decreaseBonusXX(abilityToIncrement, type, value) {
  if (type === 'bonus') {
    abilityToIncrement.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value -= value : false));
  } else {
    abilityToIncrement.bonuses
      .filter(bonus => (bonus.type === type && bonus.value >= value ? bonus.value -= Math.abs(value) : 0));
  }
}

function decrementAbility(ability, level) {
  ability.levelValue[level] -= 1;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, abilities: action.payload, loading: false };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.INCREMENT_VALUE_FOR_LEVEL_XX: {
      // REMOVE BONUS LEVEL.
      if (action.payload.id === '-') {
        const allValues = state.abilities.filter(ability => ability.name !== action.payload.id);
        allValues.map(ability => (ability.levelValue[action.payload.level] > 0 ?
          decrementAbility(ability, action.payload.level) : recalculateModsAndBonuses(state)));
        return { ...state, abilities: allValues };
      }

      // ADD BONUS LEVEL.
      const notMatchedValues2 = state.abilities
        .filter(ability => ability.name !== action.payload.id);
      notMatchedValues2.map(ability => (ability.levelValue[action.payload.level] > 0 ?
        decrementAbility(ability, action.payload.level) :
        ability.levelValue[action.payload.level]));

      const matchedValue2 = state.abilities
        .filter(ability => ability.name === action.payload.id)[0];
      matchedValue2.levelValue[action.payload.level] += 1;

      recalculateModsAndBonuses(state);

      return { ...state,
        abilities: [...notMatchedValues2, matchedValue2].sort((a, b) => a.id > b.id) };
    }

    //------------------------------------------------------------------------------
    case ACTION_TYPES.INCREMENT_ABILITY: {
      const abilityToIncrement = state.abilities
        .filter(ability => ability.name === action.payload.abilityName)[0];
      const restOfAbilities = state.abilities
        .filter(ability => ability.name !== action.payload.abilityName);

      if (action.payload.checked === true) {
        increaseBonusXX(abilityToIncrement, action.payload.bonusType, action.payload.value);
      } else {
        decreaseBonusXX(abilityToIncrement, action.payload.bonusType, action.payload.value);
      }

      recalculateModsAndBonuses(state);
      return { ...state,
        abilities: [...restOfAbilities, abilityToIncrement].sort((a, b) => a.id > b.id) };
    }

    //------------------------------------------------------------------------------
    case ACTION_TYPES.ADD_ability:
      return { ...state, abilities: [...state.abilities, action.payload] };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.CALCULATE_MODS:
      recalculateModsAndBonuses(state);
      return { ...state };

    //------------------------------------------------------------------------------
    default:
      return state;
  }
}
