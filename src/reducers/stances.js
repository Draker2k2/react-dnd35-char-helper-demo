import { ACTION_TYPES } from '../actions/stances';

const INITIAL_STATE = {
  stances: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, stances: [...action.payload].sort((a, b) => a.name > b.name), loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.TOGGLE: {
      const stanceToToggle = state.stances.filter(stance => stance.name === action.payload)[0];
      stanceToToggle.checked = !stanceToToggle.checked;
      const stancesToNotToggle = state.stances.filter(stance => stance.name !== action.payload);
      return { ...state,
        stances: [stanceToToggle, ...stancesToNotToggle].sort((a, b) => a.name > b.name) };
    }
    default:
      return state;
  }
}
