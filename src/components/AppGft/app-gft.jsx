import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './wrapper';
import Title from '../../components/Title';
import AbilitiesContainer from '../../containers/AbilitiesContainer';
import DefensesContainer from '../../containers/DefensesContainer';
import ItemsContainer from '../../containers/ItemsContainer';
// import ItemsFiltradosContainer from '../../containers/ItemsFiltradosContainer';
import SkillsContainer from '../../containers/SkillsContainer';
import HitContainer from '../../containers/HitContainer';
import DamageContainer from '../../containers/DamageContainer';
import BuffContainer from '../../containers/BuffContainer';
import ClassFeaturesContainer from '../../containers/ClassFeaturesContainer';
import FeatsContainer from '../../containers/FeatsContainer';
import HistoryContainer from '../../containers/HistoryContainer';

const AppGFT = () => (
  <BrowserRouter>
    <Wrapper>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <Title name="GFT React App" />
      <AbilitiesContainer />
      <br />
      <DefensesContainer />
      <br />
      <HitContainer />
      <br />
      <DamageContainer />
      <br />
      <BuffContainer />
      <br />
      <ClassFeaturesContainer />
      <br />
      <DefensesContainer />
      <br />
      <FeatsContainer />
      <br />
      <HistoryContainer />
      <br />
      <SkillsContainer />
      <br />
      <ItemsContainer />
      <br />
    </Wrapper>
  </BrowserRouter>
);

export default AppGFT;
