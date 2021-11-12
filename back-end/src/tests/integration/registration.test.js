const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Rota POST /registration', () => {
  before(() => stub(console, 'log').returns(true));
  after(() => console.log.restore());

  let postRegistration;

  describe('Quando os dados do `name` não são válidos', () => {
    before(async () => {
      try {
        postRegistration = await chai.request(app)
          .post('/registration')
          .send({
            name: "Gab",
            email: "gabriel@gmail.com",
            password: "123456"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 500 - HTTP Server Error', async () => {
      const { status } = postRegistration;

      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `invalid data`', async () => {
      const { body: { error } } = postRegistration;

      expect(error).to.be.equals('invalid data');
    });
  });
  
  describe('Quando os dados do `email` não são válidos', () => {
    before(async () => {
      try {
        postRegistration = await chai.request(app)
          .post('/registration')
          .send({
            name: "Gabriel Pereira ",
            email: "gabriel",
            password: "123456"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 500 - HTTP Server Error', async () => {
      const { status } = postRegistration;

      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `invalid data`', async () => {
      const { body: { error } } = postRegistration;

      expect(error).to.be.equals('invalid data');
    });
  });

  describe('Quando os dados do `password` não são válidos', () => {
    before(async () => {
      try {
        postRegistration = await chai.request(app)
          .post('/registration')
          .send({
            name: "Gabriel Pereira ",
            email: "gabriel@gmail.com",
            password: "123"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 500 - HTTP Server Error', async () => {
      const { status } = postRegistration;

      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `invalid data`', async () => {
      const { body: { error } } = postRegistration;

      expect(error).to.be.equals('invalid data');
    });
  });

  describe('Quando os dados cadastrados já existem no banco', () => {
    before(async () => {
      try {
        postRegistration = await chai.request(app)
          .post('/registration')
          .send({
            name: "Cliente Zé Birita",
            email: "zebirita@email.com",
            password: "1c37466c159755ce1fa181bd247cb925"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 409 - HTTP Conflict', async () => {
      const { status } = postRegistration;

      expect(status).to.be.equals(409);
    });

    it('retorna uma mensagem `User already registered`', async () => {
      const { body: { error } } = postRegistration;

      expect(error).to.be.equals('User already registered');
    });
  });

  describe('Quando os dados cadastrados são registrados no banco', () => {
    before(async () => {
      try {
        postRegistration = await chai.request(app)
          .post('/registration')
          .send({
            name: "Beto Silva Paz",
            email: "betao123@gmail.com",
            password: "xablau980"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 201 - HTTP Created', async () => {
      const { status } = postRegistration;

      expect(status).to.be.equals(201);
    });

    it('retorna um objeto', async () => {
      const { body } = postRegistration;

      expect(body).to.be.a('object');
    });

    it('retorna um objeto que não é vazio', async () => {
      const { body } = postRegistration;

      expect(body).to.not.be.null;
    });
  });
});