const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Rota POST /login', () => {
  before(() => stub(console, 'log').returns(true));
  after(() => console.log.restore());

  let postLogin;

  describe('Quando os dados do `email` não são válidos', () => {
    before(async () => {
      try {
        postLogin = await chai.request(app)
          .post('/login')
          .send({
            email: "gabriel",
            password: "123456"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 500 - HTTP Server Error', async () => {
      const { status } = postLogin;

      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `invalid data`', async () => {
      const { body: { error } } = postLogin;

      expect(error).to.be.equals('invalid data');
    });
  });

  describe('Quando os dados do `password` não são válidos', () => {
    before(async () => {
      try {
        postLogin = await chai.request(app)
          .post('/login')
          .send({
            email: "gabriel@gmail.com",
            password: "123"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 500 - HTTP Server Error', async () => {
      const { status } = postLogin;

      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `invalid data`', async () => {
      const { body: { error } } = postLogin;

      expect(error).to.be.equals('invalid data');
    });
  });

  describe('Quando o `email` não existe no banco', () => {
    before(async () => {
      try {
        postLogin = await chai.request(app)
          .post('/login')
          .send({
            email: "renato@gmail.com",
            password: "xablau@97"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 409 - HTTP Conflict', async () => {
      const { status } = postLogin;

      expect(status).to.be.equals(409);
    });

    it('retorna uma mensagem `User dont exists`', async () => {
      const { body: { error } } = postLogin;

      expect(error).to.be.equals('User dont exists');
    });
  });

  describe('Quando a `senha` for inválida', () => {
    before(async () => {
      try {
        postLogin = await chai.request(app)
          .post('/login')
          .send({
            email: "zebirita@email.com",
            password: "123457"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 409 - HTTP Conflict', async () => {
      const { status } = postLogin;

      expect(status).to.be.equals(409);
    });

    it('retorna uma mensagem `Invalid data`', async () => {
      const { body: { error } } = postLogin;

      expect(error).to.be.equals('Invalid data');
    });
  });

  describe('Quando o `email` e a `senha` são válidos', () => {
    before(async () => {
      try {
        postLogin = await chai.request(app)
          .post('/login')
          .send({
            email: "zebirita@email.com",
            password: "1c37466c159755ce1fa181bd247cb925"
          });
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 200 - HTTP Ok Status', async () => {
      const { status } = postLogin;

      expect(status).to.be.equals(200);
    });

    it('retorna um objeto', async () => {
      const { body } = postLogin;

      expect(body).to.be.a('object');
    });

    it('retorna um objeto que não é vazio', async () => {
      const { body } = postLogin;

      expect(body).to.not.be.null;
    });
  });
});