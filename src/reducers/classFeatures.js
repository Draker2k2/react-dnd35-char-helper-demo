import { ACTION_TYPES } from '../actions/classFeatures';

const INITIAL_STATE = {
  classFeatures: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, classFeatures: [...action.payload].sort((a, b) => a.name > b.name), loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.TOGGLE: {
      const classFeaturesToToggle = state.classFeatures.filter(classFeature => classFeature.name === action.payload)[0];
      classFeaturesToToggle.checked = !classFeaturesToToggle.checked;
      const classFeaturesToNotToggle = state.classFeatures.filter(classFeature => classFeature.name !== action.payload);
      return { ...state,
        classFeatures: [classFeaturesToToggle, ...classFeaturesToNotToggle].sort((a, b) => a.name > b.name) };
    }
    default:
      return state;
  }
}
