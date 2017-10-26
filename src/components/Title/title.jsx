import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './wrapper';

const Title = props => (
  <Wrapper>{props.name}</Wrapper>
);

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
