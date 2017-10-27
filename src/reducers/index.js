import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import abilitiesReducer from './abilities';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  abilities: abilitiesReducer,
});

export default rootReducer;
