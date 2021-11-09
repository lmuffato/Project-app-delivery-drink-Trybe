import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'

import LoginPage from '../pages/Login'

describe('Login page', () => {
  it('should render email input correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <LoginPage />
    </Router>)
    const emailPlaceholder = screen.getByPlaceholderText(/fulano@yahoo.com/i)
    expect(emailPlaceholder).toBeInTheDocument()
  });

  it('should render password input correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <LoginPage />
    </Router>)
    const passwordPlaceholder = screen.getByPlaceholderText(/senha/i)
    expect(passwordPlaceholder).toBeInTheDocument()
  });

  it('should render login button correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <LoginPage />
    </Router>)
    const loginButton = screen.getByText(/login/i)
    expect(loginButton).toBeInTheDocument()
  });

  it('should render "register" link correctly', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <LoginPage />
    </Router>)
    const register = screen.getByText(/ainda não tenho conta/i)
    expect(register).toBeInTheDocument()
  });

  it('should redirect to "/register" when click on "Ainda não tenho conta"', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <LoginPage />
    </Router>)
    const registerButton = screen.getByText(/ainda não tenho conta/i)
    userEvent.click(registerButton, {button: 0});
    expect(history.location.pathname).toEqual('/register')
  });
})
