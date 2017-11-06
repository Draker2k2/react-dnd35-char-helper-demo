import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'MISIONS_fetch_data',
  FETCH_DATA_SUCCESFULL: 'MISIONS_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'MISIONS_fetch_data_error',
};

const PORT = process.env.PORT || 3000;

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/history/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/misions/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};

export const addItem = (newDate, newTittle, newDesc) => (dispatch) => {
  const mision = {
    date: newDate,
    tittle: newTittle,
    description: newDesc,
  };
  axios.post(`http://localhost:${PORT}/misions`, mision);
  dispatch({ type: ACTION_TYPES.ADD_ITEM, payload: mision });
};
