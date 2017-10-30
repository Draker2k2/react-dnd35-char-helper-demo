import { ACTION_TYPES } from '../actions/buffs';

const INITIAL_STATE = {
  buffs: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, buffs: [...action.payload].sort((a, b) => a.name > b.name), loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.TOGGLE: {
      const buffToToggle = state.buffs.filter(buff => buff.name === action.payload)[0];
      buffToToggle.checked = !buffToToggle.checked;
      const buffsToNotToggle = state.buffs.filter(buff => buff.name !== action.payload);
      return { ...state,
        buffs: [buffToToggle, ...buffsToNotToggle].sort((a, b) => a.name > b.name) };
    }
    default:
      return state;
  }
}
