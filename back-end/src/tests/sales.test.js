const { expect } = require('chai');
const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('04 - Retorno de sales', () => {
  
  shell.cd('..');
  shell.exec('npm run db:reset');

  describe('Quando a venda dá certo', () => {
    it('Retorna o código de status 201 e o saleId: 1', async () => {
      let token;
      await frisby
      .post(`${url}/login`,
        {
          email: 'zebirita@email.com',
          password: '$#zebirita#$',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

      await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/sales`,
      {
        "totalPrice": "10", 
        "deliveryAddress": "Rua K",
        "deliveryNumber": "123",
        "userId": "3",
        "sellerId": "2",
        "products": [2]
      })
      .then ((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect('status', 201)
        expect(result.saleId).to.be.equals(1);
      })
    });
  });

  describe('Quando faltam dados na venda', () => {
    it('Falta o token, recebe status 401 e mensagem de erro.', async () => {
      await frisby
      .post(`${url}/sales`,
      {
        "totalPrice": "10", 
        "deliveryAddress": "Rua K",
        "deliveryNumber": "123",
        "userId": "3",
        "sellerId": "2",
        "products": [2]
      })
      .then ((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect('status', 401)
        expect(result.message).to.be.equals('Token not found');
      })
    });

    it('Quando falta o preço total', async () => {
      let token;
      await frisby
      .post(`${url}/login`,
        {
          email: 'zebirita@email.com',
          password: '$#zebirita#$',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

      await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/sales`,
      {
        "totalPrice": "10", 
        "deliveryAddress": "Rua K",
        "deliveryNumber": "123",
        "userId": "3",
        "sellerId": "2",
        "products": [2]
      })
      .then ((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect('status', 201)
        expect(result.saleId).to.be.equals(1);
      })
    });
  });
});
