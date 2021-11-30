import React from 'react';
import PropTypes from 'prop-types';

const ErrorBackend = ({ messageError, dataTestId }) => (
  <span data-testid={ dataTestId }>
    { messageError }
  </span>
);

ErrorBackend.propTypes = {
  messageError: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ErrorBackend;
