import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './wrapper';
import Title from '../../components/Title';
import AbilitiesContainer from '../../containers/AbilitiesContainer';
// import DamageContainer from '../../containers/DamageContainer';

const AppGFT = () => (
  <BrowserRouter>
    <Wrapper>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <Title name="GFT React App" />
      <AbilitiesContainer />
    </Wrapper>
  </BrowserRouter>
);

export default AppGFT;
