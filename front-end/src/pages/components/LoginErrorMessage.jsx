import React from 'react';
import PropTypes from 'prop-types';

const LoginErrorMessage = ({ errorMessage }) => {
  console.log();
  return (
    <div>
      <p
        data-testid="common_login__element-invalid-emai
          l [Elemento oculto {(Mensagens de erro)}]"
      >
        { errorMessage }
      </p>
    </div>
  );
};

export default LoginErrorMessage;

LoginErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
