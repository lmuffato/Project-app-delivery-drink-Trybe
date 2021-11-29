import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "../pages/Products";

describe("Teste página de produtos", () => {
  test("Teste botão checkout", () => {
    render(<Products />);
    const checkoutBtn = screen.findByTestId("customer_products__button-cart");
    expect(checkoutBtn).toBeInTheDocument();
    expect(checkoutBtn).toHaveProperty('type', 'button');
    expect(checkoutBtn).toHaveProperty('className', 'buttonCheckout');
    expect(checkoutBtn).toBeDisabled();
  });
  test("Testes dos cards de produto", () => {
    render(<Products />);
    const addButton = screen.findByText('+');
    expect(addButton).toBeInTheDocument();
  })
});