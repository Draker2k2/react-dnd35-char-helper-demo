import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'DAMAGE_fetch_data',
  FETCH_DATA_SUCCESFULL: 'DAMAGE_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'DAMAGE_fetch_data_error',
  CALCULATE_BONUS: 'DAMAGE_calculate_bonus',
  INCREASE_STATIC_BONUS: 'DAMAGE_increase_static_bonus',
  INCREASE_DICES_BONUS: 'DAMAGE_increase_dice_bonus',
};

const PORT = process.env.PORT || 3000;

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/damage/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/damage/`);
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
