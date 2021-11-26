import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = ({ subtitle }) => (
  <h2>
    { subtitle }
  </h2>
);

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default SubTitle;
