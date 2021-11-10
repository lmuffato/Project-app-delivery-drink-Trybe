const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const { stub } = require('sinon');

chai.use(chaiHttp);

const server = require('../api/server');
const { ALL_FILDES_FILLED, INCORRECT_USERNAME_OR_PASSWORD } = require('../messages/errorMessages');

describe('POST /login', () => {
  let db;

  const findOneStub = stub(User, 'findOne')

  before(() => {
    findOneStub.resolves([]);
  });

  after(() => {
    findOneStub.restore();
  });

  describe('Casos de falha', () => {
    before(async () => {
      await chai.request(server).post('/register').send({
        name: 'Yarpen Zigrin',
        email: 'yarpenzigrin@anao.com',
        password: '123456789',
      });
    });

    describe('Quando não é passado o campo "email"', () => {
      let response;

      before(async () => {
        response = await chai.request(server).post('/login').send({
          password: '123456789',
        });
      });

      it('retorna o código de status 401', () => {
        expect(response).to.have.status(401);
      });

      it('retorna um objeto', () => {
        expect(response).to.be.a('object');
      });

      it('o objeto possui a propriedade "data"', () => {
        expect(response.body).to.have.property('data');
      });

      it(`a propriedade "data" possui o texto "${ALL_FILDES_FILLED}"`, () => {
        expect(response.body.data).to.be.equal(ALL_FILDES_FILLED);
      });
    });

    describe('Quando não é passado o campo "password"', () => {
      let response;

      before(async () => {
        response = await chai.request(server).post('/login').send({
          email: 'yarpenzigrin@anao.com',
        });
      });

      it('retorna o código de status 401', () => {
        expect(response).to.have.status(401);
      });

      it('retorna um objeto', () => {
        expect(response).to.be.a('object');
      });

      it('o objeto possui a propriedade "data"', () => {
        expect(response.body).to.have.property('data');
      });

      it(`a propriedade "data" possui o texto "${ALL_FILDES_FILLED}"`, () => {
        expect(response.body.data).to.be.equal(ALL_FILDES_FILLED);
      });
    });

    describe('Quando não é passado um e-mail válido no campo "email"', () => {
      let response;

      before(async () => {
        response = await chai.request(server).post('/login').send({
          email: 'yarpenzigrin@.com',
          password: '123456789',
        });
      });

      it('retorna o código de status 401', () => {
        expect(response).to.have.status(401);
      });

      it('retorna um objeto', () => {
        expect(response).to.be.a('object');
      });

      it('o objeto possui a propriedade "data"', () => {
        expect(response.body).to.have.property('data');
      });

      it(`a propriedade "data" possui o texto "${INCORRECT_USERNAME_OR_PASSWORD}"`, () => {
        expect(response.body.data).to.be.equal(INCORRECT_USERNAME_OR_PASSWORD);
      });
    });

    describe('Quando não é passado uma senha válida no campo "password"', () => {
      let response;

      before(async () => {
        response = await chai.request(server).post('/login').send({
          email: 'yarpenzigrin@anao.com',
          password: '12',
        });
      });

      it('retorna o código de status 401', () => {
        expect(response).to.have.status(401);
      });

      it('retorna um objeto', () => {
        expect(response).to.be.a('object');
      });

      it('o objeto possui a propriedade "data"', () => {
        expect(response.body).to.have.property('data');
      });

      it(`a propriedade "data" possui o texto "${INCORRECT_USERNAME_OR_PASSWORD}"`, () => {
        expect(response.body.data).to.be.equal(INCORRECT_USERNAME_OR_PASSWORD);
      });
    });
  });

  describe('Casos de sucesso', () => {
    before(async () => {
      await chai.request(server).post('/register').send({
        name: 'Yarpen Zigrin',
        email: 'yarpenzigrin@anao.com',
        password: '123456789',
      });
    });

    describe('Quando é feito o login', () => {
      let response;

      before(async () => {
        response = await chai.request(server).post('/login').send({
          email: 'yarpenzigrin@anao.com',
          password: '123456789',
        });
      });

      it('retorna o código de status 200', () => {
        expect(response).to.have.status(200);
      });

      it('retorna um objeto', () => {
        expect(response).to.be.a('object');
      });

      it('o objeto possui a propriedade "token"', () => {
        expect(response.body).to.have.property('token');
      });
    });
  });
});
