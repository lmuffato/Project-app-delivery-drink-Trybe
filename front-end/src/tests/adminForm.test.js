import React from "react";
import { render, screen } from "@testing-library/react";
import AdminForm from "../Components/AdminForm";

describe("Teste admin form", () => {
  test("Título", () => {
    render(<AdminForm />);
    const title = screen.getByText("Cadastrar novo usuário");
    expect(title).toBeInTheDocument();
  });
  test("Teste input nome", () => {
    render(<AdminForm />);
    const nameInput = screen.getByText("Nome :");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveProperty('type', 'text');
  });

});