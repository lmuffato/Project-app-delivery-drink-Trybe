import React from 'react';
import PropTypes from 'prop-types';

const ErrorBackend = ({ messageError }) => (
  <span data-testid="admin_manage__element-invalid-register">
    { messageError }
  </span>
);

ErrorBackend.propTypes = {
  messageError: PropTypes.string.isRequired,
};

export default ErrorBackend;
