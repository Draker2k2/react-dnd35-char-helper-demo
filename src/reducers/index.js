import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import abilitiesReducer from './abilities';
import defensesReducer from './defenses';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  abilities: abilitiesReducer,
  defenses: defensesReducer,
});

export default rootReducer;
