import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import abilitiesReducer from './abilities';
import defensesReducer from './defenses';
import itemsReducer from './items';
import skillsReducer from './skills';
import buffsReducer from './buffs';
import hitReducer from './hit';
import damageReducer from './damage';
import featsReducer from './feats';
import classFeaturesReducer from './classFeatures';
import historyReducer from './history';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  abilities: abilitiesReducer,
  defenses: defensesReducer,
  items: itemsReducer,
  form: formReducer,
  defenses: defensesReducer,
  abilities: abilitiesReducer,
  skills: skillsReducer,
  buffs: buffsReducer,
  hit: hitReducer,
  damage: damageReducer,
  feats: featsReducer,
  classFeatures: classFeaturesReducer,
  history: historyReducer,
});

export default rootReducer;
