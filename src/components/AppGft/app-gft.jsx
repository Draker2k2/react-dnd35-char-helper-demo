import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './wrapper';
import Title from '../../components/Title';

const AppGFT = () => (
  <BrowserRouter>
    <Wrapper>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <Title name="GFT React App" />
    </Wrapper>
  </BrowserRouter>
);

export default AppGFT;
