import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ id, name }) => (
  <label htmlFor={ id }>
    { name }
  </label>
);

Label.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Label;
