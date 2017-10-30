import axios from 'axios';


export const ACTION_TYPES = {
  FETCH_DATA: 'SKILLS_fetch_data',
  FETCH_DATA_SUCCESFULL: 'SKILLS_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'SKILLS_fetch_data_error',
  INCREMENT_SKILL: 'incrementSkill',
  CALCULATE_BONUS: 'SKILLS_calculate_bonus',
  CALCULATE_MODS: 'SKILLS_calculate_mods',
};

const PORT = process.env.PORT || 3000;

export const getData = () => (dispatch) => {
  //const request = axios(`http://localhost:${PORT}/skills/`);
  const request = axios(`https://secret-dawn-75685.herokuapp.com/skills/`);
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
