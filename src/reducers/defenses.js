import { ACTION_TYPES } from '../actions/defenses';

const INITIAL_STATE = {
  defenses: [],
  loading: false,
  error: false,
};

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
        defenseToIncrement.inherentValue -= action.payload.value;
      } else {
        defenseToIncrement.inherentValue += action.payload.value;
      }
      return { ...state,
        defenses: [...restOfDefenses, defenseToIncrement].sort((a, b) => a.name > b.name) };
    }
    default:
      return state;
  }
}
