import React from 'react';
import PropTypes from 'prop-types';

const RegisterErrorMessage = ({ errorMessage }) => {
  console.log();
  return (
    <div>
      <p
        data-testid="common_register__element-invalid_register
         [Elemento oculto {(Mensagens de erro)}]"
      >
        { errorMessage }
      </p>
    </div>
  );
};

export default RegisterErrorMessage;

RegisterErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
