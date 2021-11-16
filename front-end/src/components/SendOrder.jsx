import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function SendOrder() {
  function selectInput() {
    return (
      <Form.Group as={ Col } controlId="formGridState">
        <Form.Label>P. Vendedora Responsável</Form.Label>
        <Form.Select data-testid="customer_checkout__select-seller">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
    );
  }

  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <Form>
        <Row className="mb-3">
          { selectInput() }
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              data-testid="customer_checkout__input-address"
              type="text"
              placeholder="..."
            />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Número</Form.Label>
            <Form.Control
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              placeholder="#"
            />
          </Form.Group>
        </Row>
        <Button
          data-testid="customer_checkout__button-submit-order"
          variant="success"
          type="submit"
        >
          FINALIZAR PEDIDO
        </Button>
      </Form>
    </div>
  );
}

export default SendOrder;
