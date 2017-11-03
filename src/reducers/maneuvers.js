import { ACTION_TYPES } from '../actions/maneuvers';

const INITIAL_STATE = { 
  maneuvers: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, maneuvers: action.payload, loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.TOGGLE: {
      const maneuverToToggle = state.maneuvers.filter(maneuver => maneuver.name === action.payload)[0];
      maneuverToToggle.checked = !maneuverToToggle.checked;
      const maneuversToNotToggle = state.maneuvers.filter(maneuver => maneuver.name !== action.payload);
      return { ...state,
        maneuvers: [maneuverToToggle, ...maneuversToNotToggle].sort((a, b) => a.name > b.name) };
    }
    case ACTION_TYPES.ADD_ITEM:
      return { ...state, maneuvers: [...state.maneuvers, action.payload] };
    default:
      return state;
  }
}
