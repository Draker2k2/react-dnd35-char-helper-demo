import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'FEATS_fetch_data',
  FETCH_DATA_SUCCESFULL: 'FEATS_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'FEATS_fetch_data_error',
  TOGGLE: 'FEATS_toggle',
};

const PORT = process.env.PORT || 3000;

export const featToggle = name => (dispatch) => {
  dispatch({ type: ACTION_TYPES.TOGGLE, payload: name });
};

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/feats/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/feats/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
