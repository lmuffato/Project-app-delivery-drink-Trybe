import React from 'react';
import { act, cleanup, render, screen, fireEvent, getByTestId } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

const email = 'test@email.com';
const password = 'test-login';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwicm9sZSI6ImFkbWluaXN0cmFkb3IiLCJuYW1lIjoidGVzdCIsImlkIjo0LCJpYXQiOjE2MzY4MjUzNjksImV4cCI6MTYzNzY4OTM2OX0.h7BE_gB0b1GF1SpEUKUWe0qgDojDVbFK0RZD1OYTxTI';
const EMAIL_TEST_ID = 'common_login__input-email';
const BUTTON_REGISTER_TEST_ID = 'common_login__button-register';
const PASSWORD_TEST_ID = 'common_login__input-password';
const BUTTON_LOGIN_TEST_ID = 'common_login__button-login';
const ELEMENT_INVALID_EMAIL_TEST_ID = 'common_login__element-invalid-email';

const mockPostAxios = () => {
  jest
  .spyOn('axios', post)
  .mockImplementation(() => Promise.resolve({ status: 200, statusText: 'Ok', data: token }))
}

describe('Teste da página de login', () => {
  beforeEach(cleanup);
  
  it('Renderiza os itens corretos', () => {
    render(<App />);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
    const loginButton = screen.getByTestId(BUTTON_LOGIN_TEST_ID);
    const registerButton = screen.getByTestId(BUTTON_REGISTER_TEST_ID);
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();
    expect(registerButton).toBeInTheDocument();
  });

  it('Botão de login desabilitado ao entrar com email inválido', () => {
    render(<App />);
    
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
    const loginButton = screen.getByTestId(BUTTON_LOGIN_TEST_ID);

    fireEvent.change(emailInput, { target: { value: 'email-invalido' } });
    fireEvent.change(passwordInput, { target: { value: password } });

    expect(loginButton).toBeDisabled();
  })

  it('Botão de login desabilitado ao entrar com senha inválida', () => {
    render(<App />);
    
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
    const loginButton = screen.getByTestId(BUTTON_LOGIN_TEST_ID);

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    expect(loginButton).toBeDisabled();
  })

  it('Botão de login habilitado ao entrar com dados válidos', () => {
    render(<App />);
    
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
    const loginButton = screen.getByTestId(BUTTON_LOGIN_TEST_ID);

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    expect(loginButton).not.toBeDisabled();
  })
})