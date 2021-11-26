import React from 'react';
import PropTypes from 'prop-types';

const ErrorBackend = ({ messageError, datatestid }) => (
  <span data-testid={ datatestid }>
    { messageError }
  </span>
);

ErrorBackend.propTypes = {
  messageError: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
};

export default ErrorBackend;
