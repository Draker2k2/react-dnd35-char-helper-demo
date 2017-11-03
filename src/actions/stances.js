import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'STANCES_fetch_data',
  FETCH_DATA_SUCCESFULL: 'STANCES_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'STANCES_fetch_data_error',
  TOGGLE: 'STANCES_toggle',
};

const PORT = process.env.PORT || 3000;

export const stanceToggle = name => (dispatch) => {
  dispatch({ type: ACTION_TYPES.TOGGLE, payload: name });
};

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/buffs/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/stances/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
