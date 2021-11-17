import React from 'react';

function ErrorRegister() {
  return (
    <div>
      <p data-testid="common_login__element-invalid-email">
        Nome e/ou email já cadastrado
      </p>
    </div>

  );
}

export default ErrorRegister;
// apenas criado o componente da mensagem de erro, para o seguimento do requisito é nessessário o backend
