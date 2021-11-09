import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'

import Register from '../pages/Register'

describe('Register page', () => {
  it('should render name input correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Register />
    </Router>)
    const namePlaceholder = screen.getByPlaceholderText(/seu nome/i)
    expect(namePlaceholder).toBeInTheDocument()
  });

  it('should render email input correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Register />
    </Router>)
    const emailPlaceholder = screen.getByPlaceholderText(/fulano@yahoo.com/i)
    expect(emailPlaceholder).toBeInTheDocument()
  });

  it('should render password input correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Register />
    </Router>)
    const passPlaceholder = screen.getByPlaceholderText("********")
    expect(passPlaceholder).toBeInTheDocument()
  });

  it('should render "voltar" correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Register />
    </Router>)
    const link = screen.getByText(/voltar/i)
    expect(link).toBeInTheDocument()
  });

  it('should redirect to "/login" when click "voltar"', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Register />
    </Router>)
    const link = screen.getByText(/voltar/i)
    userEvent.click(link, {button: 0});
    expect(history.location.pathname).toEqual('/')
  });
})
