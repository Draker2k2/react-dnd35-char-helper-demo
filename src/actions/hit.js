import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'HIT_fetch_data',
  FETCH_DATA_SUCCESFULL: 'HIT_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'HIT_fetch_data_error',
  INCREMENT_HIT: 'incrementHit',
  CALCULATE_BONUS: 'HIT_calculate_bonus',
  ADD_EXTRA_ATTACK: 'add_extra_attack',
  REMOVE_EXTRA_ATTACK: 'remove_extra_attack',
};

const PORT = process.env.PORT || 3000;

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/hit/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/hit/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
    dispatch({ type: ACTION_TYPES.CALCULATE_BONUS });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
