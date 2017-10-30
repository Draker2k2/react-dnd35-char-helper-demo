import { ACTION_TYPES } from '../actions/skills';

const INITIAL_STATE = {
  skills: [],
  loading: false,
  error: false,
};

let conMod = 0;
let dexMod = 0;
let strMod = 0;
let wisMod = 0;
let intMod = 0;
let chaMod = 0;

export function setModifiers(constitutionMod, dexterityMod, strenghMod,
  intelligenceMod, charismaMod, wisdomMod) {
  conMod = constitutionMod;
  dexMod = dexterityMod;
  strMod = strenghMod;
  wisMod = wisdomMod;
  intMod = intelligenceMod;
  chaMod = charismaMod;
}

function addModifier(skill) {
  if (skill.keyAbility === 'CON') {
    skill.totalBonus += conMod;
  } else if (skill.keyAbility === 'DEX') {
    skill.totalBonus += dexMod;
  } else if (skill.keyAbility === 'STR') {
    skill.totalBonus += strMod;
  } else if (skill.keyAbility === 'WIS') {
    skill.totalBonus += wisMod;
  } else if (skill.keyAbility === 'INT') {
    skill.totalBonus += intMod;
  } else if (skill.keyAbility === 'CHA') {
    skill.totalBonus += chaMod;
  }
}

export function recalculateTotalBonus(state) {
  state.skills.map(skill => skill.totalBonus = 0);
  state.skills.map(skill => skill.bonuses.map(bonus =>
    skill.totalBonus += +bonus.value,
  ));
  state.skills.map(skill => skill.totalBonus += +skill.sinergyBonus);
  state.skills.map(skill => (addModifier(skill)));
}

function increaseBonusXX(skillToIncrement, type, value) {
  if (type === 'bonus') {
    skillToIncrement.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value += value : false));
  } else {
    skillToIncrement.bonuses
      .filter(bonus => (bonus.type === type && bonus.value < Math.abs(value) ? bonus.value = value : 0));
  }
}

function decreaseBonusXX(skillToIncrement, type, value) {
  if (type === 'bonus') {
    skillToIncrement.bonuses.filter(bonus => (bonus.type === 'bonus' ? bonus.value -= value : false));
  } else {
    skillToIncrement.bonuses
      .filter(bonus => (bonus.type === type && bonus.value === value ? bonus.value -= value : 0));
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      addModifier(action.payload);
      return { ...state, skills: [...action.payload].sort((a, b) => a.name > b.name), loading: false };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.INCREMENT_SKILL: {
      const restOfSkills = state.skills.filter(skill =>
        skill.id !== action.payload.skillId);
      const skillToIncrement = state.skills
        .filter(skill => skill.id === action.payload.skillId)[0];
      if (action.payload.checked === true) {
        increaseBonusXX(skillToIncrement, action.payload.bonusType, action.payload.value);
      } else {
        decreaseBonusXX(skillToIncrement, action.payload.bonusType, action.payload.value);
      }
      recalculateTotalBonus(state);
      return { ...state,
        skills: [...restOfSkills, skillToIncrement].sort((a, b) => a.name > b.name) };
    }

    //------------------------------------------------------------------------------
    case ACTION_TYPES.CALCULATE_BONUS:
      recalculateTotalBonus(state);
      return { ...state };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.CALCULATE_MODS:
      setModifiers(action.payload.constitutionMod, action.payload.dexterityMod, action.payload.strenghMod,
        action.payload.intelligenceMod, action.payload.charismaMod, action.payload.wisdomMod);
      recalculateTotalBonus(state);
      return { ...state };

    //------------------------------------------------------------------------------
    default:
      return state;
  }
}
