const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Rota GET /products', () => {
  before(() => stub(console, 'log').returns(true));
  after(() => console.log.restore());

  let getProducts;

  describe('Quando o token não é encontrado', () => {
    before(async () => {
      try {
        getProducts = await chai.request(app)
          .get('/products')
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 401 - HTTP Not Found', async () => {
      const { status } = getProducts;

      expect(status).to.be.equals(401);
    });

    it('retorna uma mensagem `Token not found`', async () => {
      const { body: { message } } = getProducts;

      expect(message).to.be.equals('Token not found');
    });
  });

  describe('Quando o token não for válido', () => {
    before(async () => {
      try {
        const token = 123456;

        getProducts = await chai.request(app)
          .get('/products')
          .set('authorization', token)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 401 - HTTP Not Found', async () => {
      const { status } = getProducts;

      expect(status).to.be.equals(401);
    });

    it('retorna uma mensagem `Expired or invalid token`', async () => {
      const { body: { message } } = getProducts;

      expect(message).to.be.equals('Expired or invalid token');
    });
  });

  describe('Quandos os produtos não chegam do banco', () => {
    before(async () => {
      try {
        const token = await chai.request(app)
          .post('/login')
          .send({
            email: 'zebirita@email.com',
            password: '1c37466c159755ce1fa181bd247cb925'
          })
          .then((res) => res.body.token);

        getProducts = await chai.request(app)
          .get('/products')
          .set('authorization', token)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 409 - HTTP Conflict', async () => {
      const { status } = getProducts;

      expect(status).to.be.equals(409);
    });

    it('retorna uma mensagem `Products are empty`', async () => {
      const { body: { error } } = getProducts;

      expect(error).to.be.equals('Products are empty');
    });
  });

  describe('Quando os produtos chegam do banco', () => {
    before(async () => {
      try {
        const token = await chai.request(app)
          .post('/login')
          .send({
            email: 'zebirita@email.com',
            password: '1c37466c159755ce1fa181bd247cb925'
          })
          .then((res) => res.body.token);

        getProducts = await chai.request(app)
          .get('/products')
          .set('authorization', token)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 200 - HTTP Ok Status', async () => {
      const { status } = getProducts;

      expect(status).to.be.equals(200);
    });

    it('retorna um array', async () => {
      const { body } = getProducts;

      expect(body).to.be.a('array');
    });

    it('retorna um body que não é vazio', async () => {
      const { body } = getProducts;

      expect(body).to.not.be.null;
    });
  });
});