import React from "react";
import { render, screen } from "@testing-library/react";
import SignUp from "../pages/SignUp";

describe("Teste da tela de registro", () => {
  test("Teste input nome", () => {
    render(<SignUp />);
    const nameInput = screen.findByTestId("common_register__input-name");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveProperty('type', 'text');
    expect(nameInput).toHaveValue('');
  });
  test("Teste input email", () => {
    render(<SignUp />);
    const emailInput = screen.findByTestId("common_register__input-email");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveProperty('type', 'email');
    expect(emailInput).toHaveValue('');
  });
  test("Teste input password", () => {
    render(<SignUp />);
    const passwordInput = screen.findByTestId("common_register__input-password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveProperty('type', 'password');
    expect(passwordInput).toHaveValue('');
  });
  test("Teste botão cadastrar", () => {
    render(<SignUp />);
    const signUpBtn = screen.findByTestId("common_register__button-register");
    expect(signUpBtn).toBeInTheDocument();
    expect(signUpBtn).toHaveProperty('type', 'button');
    expect(signUpBtn).toBeDisabled();
  })
});
