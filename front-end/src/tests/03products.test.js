import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProducts from '../context/ContextProducts';
import ProviderProducts from '../context/ProviderProducts';
import CustomerProducts from '../screens/CustomerProducts';
import axios from 'axios';

const name = 'Carlos Silva e Silva';
const email = 'carlos@email.com';
const password = '123456';
const products2 = [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
      "id": 2,
      "name": "Heineken 600ml",
      "price": "7.50",
      "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
    },
    {
      "id": 3,
      "name": "Antarctica Pilsen 300ml",
      "price": "2.49",
      "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
    },
    {
      "id": 4,
      "name": "Brahma 600ml",
      "price": "7.50",
      "urlImage": "http://localhost:3001/images/brahma_600ml.jpg"
    },
    {
      "id": 5,
      "name": "Skol 269ml",
      "price": "2.19",
      "urlImage": "http://localhost:3001/images/skol_269ml.jpg"
    },
    {
      "id": 6,
      "name": "Skol Beats Senses 313ml",
      "price": "4.49",
      "urlImage": "http://localhost:3001/images/skol_beats_senses_313ml.jpg"
    },
    {
      "id": 7,
      "name": "Becks 330ml",
      "price": "4.99",
      "urlImage": "http://localhost:3001/images/becks_330ml.jpg"
    },
    {
      "id": 8,
      "name": "Brahma Duplo Malte 350ml",
      "price": "2.79",
      "urlImage": "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg"
    },
    {
      "id": 9,
      "name": "Becks 600ml",
      "price": "8.89",
      "urlImage": "http://localhost:3001/images/becks_600ml.jpg"
    },
    {
      "id": 10,
      "name": "Skol Beats Senses 269ml",
      "price": "3.57",
      "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg"
    },
    {
      "id": 11,
      "name": "Stella Artois 275ml",
      "price": "3.49",
      "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
    }
  ];

const NAVBAR_LINK_PRODUTOS = 'customer_products__element-navbar-link-products'
const NAVBAR_LINK_MEUSPEDIDOS = 'customer_products__element-navbar-link-orders';
const NAVBAR_LINK_SAIR = 'customer_products__element-navbar-link-logout';
const PAGE_BUTTON_CARRINHO = 'customer_products__button-cart';
const PAGE_LINK_CHECKOUT = 'customer_products__checkout-bottom-value';

jest
.spyOn(axios, 'get')
.mockImplementation(() => Promise.resolve({ status: 200, statusText: 'ok', data: products2 }))

const renderWithContext = (
  component) => {
  return {
    ...render(
       <Router><ProviderProducts value={ContextProducts}>
            {component}
        </ProviderProducts></Router>)
  }
};

describe('03 - Teste da pagina de produtos do usuario', () => {
  beforeEach(cleanup);
  
  it('Renderiza os itens corretos', () => {
    renderWithContext(<CustomerProducts />);
    
    const navbarLinkProdutos = screen.getByTestId(NAVBAR_LINK_PRODUTOS);
    const navbarLinkMeusPedidos = screen.getByTestId(NAVBAR_LINK_MEUSPEDIDOS);
    const navbarLinkSair = screen.getByTestId(NAVBAR_LINK_SAIR);
    const pageButtonSair = screen.getByTestId(PAGE_BUTTON_CARRINHO);
    const pageLinkCheckout = screen.getByTestId(PAGE_LINK_CHECKOUT);

    
    expect(navbarLinkProdutos).toBeInTheDocument();
    expect(navbarLinkMeusPedidos).toBeInTheDocument();
    expect(navbarLinkSair).toBeInTheDocument();
    expect(pageButtonSair).toBeInTheDocument();
    expect(pageLinkCheckout).toBeInTheDocument();
  });

  // it('Botao de cadastrar habilitado ao entrar com dados validos', () => {
  //   renderWithContext(<SignUp />);
    
  //   const nameInput = screen.getByTestId(NAME_TEST_ID);
  //   const emailInput = screen.getByTestId(EMAIL_TEST_ID);
  //   const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
  //   const registerButton = screen.getByTestId(BUTTON_REGISTER_TEST_ID);
  
  //   fireEvent.change(nameInput, { target: { value: name } });
  //   fireEvent.change(emailInput, { target: { value: email } });
  //   fireEvent.change(passwordInput, { target: { value: password } });
  
  //   expect(registerButton).not.toBeDisabled();
  // });

  // it('Botao de cadastrar desabilitado ao entrar com nome invalido', () => {
  //   renderWithContext(<SignUp />);
    
  //   const nameInput = screen.getByTestId(NAME_TEST_ID);
  //   const emailInput = screen.getByTestId(EMAIL_TEST_ID);
  //   const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
  //   const registerButton = screen.getByTestId(BUTTON_REGISTER_TEST_ID);

  //   fireEvent.change(nameInput, { target: { value: 'carlos' } });
  //   fireEvent.change(emailInput, { target: { value: email } });
  //   fireEvent.change(passwordInput, { target: { value: password } });

  //   expect(registerButton).toBeDisabled();
  // });

  // it('Botao de cadastrar desabilitado ao entrar com email invalido', () => {
  //   renderWithContext(<SignUp />);
    
  //   const nameInput = screen.getByTestId(NAME_TEST_ID);
  //   const emailInput = screen.getByTestId(EMAIL_TEST_ID);
  //   const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
  //   const registerButton = screen.getByTestId(BUTTON_REGISTER_TEST_ID);

  //   fireEvent.change(nameInput, { target: { value: name } });
  //   fireEvent.change(emailInput, { target: { value: 'email@email' } });
  //   fireEvent.change(passwordInput, { target: { value: password } });

  //   expect(registerButton).toBeDisabled();
  // });

  // it('Botao de cadastrar desabilitado ao entrar com senha invalida', () => {
  //   renderWithContext(<SignUp />);
    
  //   const nameInput = screen.getByTestId(NAME_TEST_ID);
  //   const emailInput = screen.getByTestId(EMAIL_TEST_ID);
  //   const passwordInput = screen. getByTestId(PASSWORD_TEST_ID);
  //   const registerButton = screen.getByTestId(BUTTON_REGISTER_TEST_ID);

  //   fireEvent.change(nameInput, { target: { value: name } });
  //   fireEvent.change(emailInput, { target: { value: email } });
  //   fireEvent.change(passwordInput, { target: { value: '1234' } });

  //   expect(registerButton).toBeDisabled();
  // });
});
