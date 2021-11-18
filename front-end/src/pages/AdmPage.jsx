import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import CustomerNavBar from '../components/CustomerNavBar';

function AdmPage() {
  const roles = [
    { rol: 'seller', ptRole: 'Vendedor' },
    { rol: 'customer', ptRole: 'Cliente' },
    { rol: 'administrator', ptRole: 'Administrador' },
  ];

  function selectInput() {
    return (
      <Form.Group as={ Col } controlId="formGridState">
        <Form.Label>Tipo</Form.Label>
        <Form.Select
          data-testid="admin_manage__select-role"
        >
          {
            roles.map((role) => (
              <option value={ role.rol } key={ role.rol }>{ role.ptRole }</option>
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
              data-testid="admin_manage__input-name"
              type="text"
              placeholder="Nome e Sobrenome"
            />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              data-testid="admin_manage__input-email"
              type="text"
              placeholder="digite o email"
            />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              data-testid="admin_manage__input-password"
              type="text"
              placeholder="senha"
            />
          </Form.Group>
          { selectInput() }
        </Row>
        <Button
          data-testid="admin_manage__button-register"
          variant="success"
          type="button"
        >
          CADASTRAR
        </Button>
      </Form>
    </div>
  );
}

export default AdmPage;
