import axios from 'axios';


export const ACTION_TYPES = {
  FETCH_DATA: 'ABILITIES_fetch_data',
  FETCH_DATA_SUCCESFULL: 'ABILITIES_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'ABILITIES_fetch_data_error',
  INCREMENT_VALUE_FOR_LEVEL_XX: 'incrementValueForLevelXX',
  INCREMENT_ABILITY: 'incrementAbility',
  CALCULATE_MODS: 'ABILITY_calculate_mods',
};

const PORT = process.env.PORT || 8080;

export const changeValueForLevelXX = (e) => {
  const index = e.nativeEvent.target.selectedIndex;
  dispatchEvent({ type: ACTION_TYPES.INCREMENT_VALUE_FOR_LEVEL_XX,
    payload: { id: e.target[index].text, level: e.target.value } });
};

export const getData = () => (dispatch) => {
  const request = axios(`https://secret-dawn-75685.herokuapp.com/abilities/`);
  //const request = axios(`http://localhost:${PORT}/abilities/`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
    dispatch({ type: ACTION_TYPES.CALCULATE_MODS });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
