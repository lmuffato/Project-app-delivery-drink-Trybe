const { expect } = require('chai');
const frisby = require('frisby');

const url = 'http://localhost:3001';

describe('01 - Login do usuário', () => {
  describe('quando acessa com sucesso', () => {
    it('retorna o código de status 200', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .expect('status', 200)
    });

    it('retorna um objeto', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.be.a('object');
        })
    });

    it('o objeto possui a chave name', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.have.property('name');
        })
    });

    it('a chave name retorna o valor correto', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.name).to.be.equals('Fulana Pereira');
        })
    });

    it('o objeto possui a chave email', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.have.property('email');
        })
    });

    it('a chave email retorna o valor correto', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.email).to.be.equals('fulana@deliveryapp.com');
        })
    });

    it('o objeto possui a chave role', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.have.property('role');
        })
    });

    it('a chave role retorna o valor correto', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.role).to.be.equals('seller');
        })
    });

    it('o objeto possui a chave token', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.have.property('token');
        })
    });
  });

  describe('quando não acessa por erro no email ou password', () => {
    it('email errado informado deve retornar status 400', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp',
            password: 'fulana@123'
          })
        .expect('status', 400)
    });

    it('verifica mensagem de erro para email errado', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp',
            password: 'fulana@123'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.error.message).to.be.equals('\"email\" must be a valid email');
        })
    });

    it('password errada informada, deve retornar status 401', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@122'
          })
        .expect('status', 401)
    });

    it('verifica mensagem de erro para password errada', async () => {
      await frisby
        .post(`${url}/login`,
          {
            email: 'fulana@deliveryapp.com',
            password: 'fulana@122'
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.error.message).to.be.equals('\"password\" must be a valid password');
        })
    });
  });
});
