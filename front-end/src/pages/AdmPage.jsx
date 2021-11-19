import React, { useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import CustomerNavBar from '../components/CustomerNavBar';
import UserList from '../components/UserList';
import UsersContext from '../contexts/UsersContext';

function AdmPage() {
  const { users, setUsers } = useContext(UsersContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [disAbleBtn, setDisableBtn] = useState(true);
  const [hideErr, setHideErr] = useState(true);

  const { token } = JSON.parse(localStorage.getItem('user'));

  async function handleClick() {
    const data = {
      email,
      name,
      password,
      role,
    };
    const newUsers = [...users, data];
    setUsers(newUsers);
    const myBody = JSON.stringify(data);
    const request = await fetch('http://localhost:3001/user/admin', {
      method: 'POST',
      body: myBody,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const { message } = await request.json();
    if (message) {
      setHideErr(false);
    }
  }

  useEffect(() => {
    const passwordLength = 6;
    const nameLengh = 12;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (
      emailRegex.test(email)
      && name.length >= nameLengh
      && password.length >= passwordLength
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [name, email, password]);

  function selectInput() {
    const roles = [
      { rol: 'seller', ptRole: 'Vendedor' },
      { rol: 'administrator', ptRole: 'Administrador' },
      { rol: 'customer', ptRole: 'Cliente' },
    ];
    return (
      <Form.Group as={ Col } controlId="formGridState">
        <Form.Label>Tipo</Form.Label>
        <Form.Select
          data-testid="admin_manage__select-role"
          onChange={ (e) => setRole(e.target.value) }
        >
          {
            roles.map((rol) => (
              <option value={ rol.rol } key={ rol.rol }>{ rol.ptRole }</option>
            ))
          }
        </Form.Select>
      </Form.Group>
    );
  }

  return (
    <div>
      <CustomerNavBar userRole="administrator" />
      <Form>
        <Row className="mb-3">
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              value={ name }
              onChange={ (e) => setName(e.target.value) }
              data-testid="admin_manage__input-name"
              type="text"
              placeholder="Nome e Sobrenome"
            />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              data-testid="admin_manage__input-email"
              type="text"
              placeholder="digite o email"
            />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
              data-testid="admin_manage__input-password"
              type="text"
              placeholder="senha"
            />
          </Form.Group>
          { selectInput() }
        </Row>
        <Button
          onClick={ handleClick }
          disabled={ disAbleBtn }
          data-testid="admin_manage__button-register"
          variant="success"
          type="button"
        >
          CADASTRAR
        </Button>
      </Form>
      <span
        data-testid="admin_manage__element-invalid-register"
        hidden={ hideErr }
      >
        Usuario já cadastrado
      </span>
      <br />
      <br />
      <br />
      <UserList />
    </div>
  );
}

export default AdmPage;
