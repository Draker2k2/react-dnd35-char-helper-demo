import { ACTION_TYPES } from '../actions/history';

const INITIAL_STATE = {
  history: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, history: action.payload, loading: false };

    //------------------------------------------------------------------------------
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };

    //------------------------------------------------------------------------------
    default:
      return state;
  }
}
