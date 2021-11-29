import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

describe('Teste da tela de login', () => {
  test("teste botão login por texto", () => {
    render(<Login />);
    const loginBtn = screen.findByText("Entrar");
    expect(loginBtn).toBeInTheDocument();
  });
  test("Teste botão login por data-testid", () => {
    render(<Login />);
    const loginBtn = screen.findAllByTestId("common_login__button-login");
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveProperty('type', 'button');
    expect(loginBtn).toBeDisabled();
  });
  test("Teste input email", () => {
    render(<Login />);
    const emailInput = screen.findAllByTestId("common_login__input-email");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveProperty('type', 'email');
    expect(emailInput).toHaveValue('');
  });
  test("Teste input passord", () => {
    render(<Login />);
    const passwordInput = screen.findAllByTestId("common_login__input-password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput). toHaveAttribute('type', 'password');      
    expect(passwordInput).toHaveValue('');
  });
  test("Teste botão registrar-se", () => {
    render(<Login />);
    const signUpBtn = screen.findAllByTestId("common_login__button-register");
    expect(signUpBtn).toBeInTheDocument();
  })
});
