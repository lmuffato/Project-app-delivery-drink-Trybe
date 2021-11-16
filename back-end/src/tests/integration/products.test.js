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

  describe('Quandos os produtos não chegam do banco', () => {
    before(async () => {
      try {
        getProducts = await chai.request(app)
          .get('/products')
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
        getProducts = await chai.request(app)
          .get('/products')
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