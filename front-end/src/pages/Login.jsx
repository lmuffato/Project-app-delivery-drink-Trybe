import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import md5 from 'md5';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disAbleBtn, setDisAbleBtn] = useState(true);
  const [hideWarning, setHideWarning] = useState(true);

  const history = useHistory();

  function checkPassword(user, token) {
    if (user.password === md5(password)) {
      const localStrg = {
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      };
      localStorage.setItem('user', JSON.stringify(localStrg));
      history.push('/customer/products');
    }
  }

  function checkBtn() {
    const passwordLength = 6;
    const re = /\S+@\S+\.\S+/;
    if (password.length >= passwordLength && re.test(email)) {
      setDisAbleBtn(false);
      return;
    }
    setDisAbleBtn(true);
  }

  async function loginClic() {
    const data = { email };
    const myBody = JSON.stringify(data);
    const request = await fetch('http://localhost:3001/user', {
      method: 'POST',
      body: myBody,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { message, user, token } = await request.json();
    if (message) {
      setHideWarning(false);
    } else {
      checkPassword(user, token);
    }
  }

  function handleRegisterClick() {
    history.push('/register');
  }

  useEffect(() => {
    setHideWarning(true);
    checkBtn();
  }, [email, password]);

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            data-testid="common_login__input-email"
            size="sm"
            type="email"
            placeholder="Enter email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            data-testid="common_login__input-password"
            type="password"
            placeholder="Password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </Form.Group>
        <Button
          onClick={ loginClic }
          variant="primary"
          type="button"
          data-testid="common_login__button-login"
          disabled={ disAbleBtn }
        >
          LOGIN
        </Button>
        <br />
        <br />
        <Button
          onClick={ handleRegisterClick }
          variant="secondary"
          type="button"
          data-testid="common_login__button-register"
        >
          AINDA NÃO TENHO CONTA
        </Button>
      </Form>
      <p
        data-testid="common_login__element-invalid-email"
        hidden={ hideWarning }
      >
        Email não cadastrado!
      </p>
    </>
  );
}

export default Login;
