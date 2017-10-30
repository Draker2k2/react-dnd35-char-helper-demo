import { ACTION_TYPES } from '../actions/items';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, items: action.payload, loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.TOGGLE: {
      const itemToToggle = state.items.filter(item => item.name === action.payload)[0];
      itemToToggle.checked = !itemToToggle.checked;
      const itemsToNotToggle = state.items.filter(item => item.name !== action.payload);
      return { ...state,
        items: [itemToToggle, ...itemsToNotToggle].sort((a, b) => a.name > b.name) };
    }
    case ACTION_TYPES.ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
