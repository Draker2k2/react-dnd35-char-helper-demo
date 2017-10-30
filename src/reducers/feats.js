import { ACTION_TYPES } from '../actions/feats';

const INITIAL_STATE = {
  feats: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, feats: [...action.payload].sort((a, b) => a.name > b.name), loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.TOGGLE: {
      const featsToToggle = state.feats.filter(feat => feat.name === action.payload)[0];
      featsToToggle.checked = !featsToToggle.checked;
      const featsToNotToggle = state.feats.filter(feat => feat.name !== action.payload);
      return { ...state,
        feats: [featsToToggle, ...featsToNotToggle].sort((a, b) => a.name > b.name) };
    }
    default:
      return state;
  }
}
