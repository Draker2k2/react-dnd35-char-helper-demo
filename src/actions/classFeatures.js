import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'CLASS_FEATURES_fetch_data',
  FETCH_DATA_SUCCESFULL: 'CLASS_FEATURES_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'CLASS_FEATURES_fetch_data_error',
  TOGGLE: 'CLASS_FEATURES_toggle',
};

const PORT = process.env.PORT || 3000;

export const classFeatureToggle = name => (dispatch) => {
  dispatch({ type: ACTION_TYPES.TOGGLE, payload: name });
};

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/classFeatures/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/classFeatures/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
