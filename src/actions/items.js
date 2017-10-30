import axios from 'axios';
// import abilityIncrement from 'actions/abilities';

export const ACTION_TYPES = {
  FETCH_DATA: 'ITEMS_fetch_data',
  FETCH_DATA_SUCCESFULL: 'ITEMS_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'ITEMS_fetch_data_error',
  TOGGLE: 'ITEM_toggle',
  ADD_ITEM: 'ITEM_add_item',
};

const PORT = process.env.PORT || 3000;

export const itemToggle = name => (dispatch) => {
  dispatch({ type: ACTION_TYPES.TOGGLE, payload: name });
};

/*
export const toggleIncrement = (name, checked, abilityName, bonusType, value) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.TOGGLE, payload: name });
  dispatch({ type: 'incrementAbility', payload: { checked, abilityName, bonusType, value } });
};
*/

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/items/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/items/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};

export const addItem = () => (dispatch) => {
  const item = {
    id: '#99',
    name: '99 Super good circlet of Defense',
    description: 'Useful for defense.',
    bonuses: [
      {
        type: 'inherent',
        value: 5,
        target: 'Ability',
        subTarget: 'Dexterity',
      },
      {
        type: 'racial',
        value: 2,
        target: 'Defenses',
        subTarget: 'Reflexes',
      },
      {
        type: 'shield',
        value: 3,
        target: 'Defenses',
        subTarget: 'AC',
      },
    ] };

  axios.post(`http://localhost:${PORT}/items`, item);
  dispatch({ type: ACTION_TYPES.ADD_ITEM, payload: item });
};
