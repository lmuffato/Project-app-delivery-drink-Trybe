import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

describe('Testa página de login', () => {
  it('Checa todos os componentes', () => {
    const { getByText, getByTestId} = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailLabel = getByText(/Email address/);
    const passwordLabel = getByText(/Password/);
    const loginBtn = getByText(/LOGIN/);
    const registerBtn = getByText(/AINDA NÃO TENHO CONTA/);
    const emailInput = getByTestId('common_login__input-email');
    const passwordInput = getByTestId('common_login__input-password');

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(registerBtn).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it('Checa o botao de login', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const emailInput = getByTestId('common_login__input-email');
    const passwordInput = getByTestId('common_login__input-password');
    const loginBtn = getByText(/LOGIN/);

    expect(loginBtn).toBeDisabled();
    userEvent.type(emailInput, 'email@email.com');
    expect(loginBtn).toBeDisabled();
    userEvent.type(passwordInput, '123456');
    expect(loginBtn).not.toBeDisabled();
    userEvent.click(loginBtn);
    const warningMsg = getByText(/Email não cadastrado!/);
    expect(warningMsg).toBeInTheDocument();
  });
  it('Checa botao de registrar', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const registerBtn = getByTestId('common_login__button-register');
    expect(registerBtn).toBeInTheDocument();
    userEvent.click(registerBtn);
    const pathName = history.location.pathname;
  });
});
