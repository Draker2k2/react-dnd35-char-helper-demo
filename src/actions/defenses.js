import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'DEFENSES_fetch_data',
  FETCH_DATA_SUCCESFULL: 'DEFENSES_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'DEFENSES_fetch_data_error',
  INCREMENT_DEFENSE: 'incrementDefense',
};

const PORT = process.env.PORT || 8080;

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/defenses/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/defenses/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
