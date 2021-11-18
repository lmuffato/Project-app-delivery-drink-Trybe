const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Rota POST /orders', () => {
  before(() => stub(console, 'log').returns(true));
  after(() => console.log.restore());

  let postOrders;

  describe('Quando o token não é encontrado', () => {
    before(async () => {
      try {
        postOrders = await chai.request(app)
          .post('/orders')
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 401 - HTTP Not Found', async () => {
      const { status } = postOrders;

      expect(status).to.be.equals(401);
    });

    it('retorna uma mensagem `Token not found`', async () => {
      const { body: { message } } = postOrders;

      expect(message).to.be.equals('Token not found');
    });
  });

  describe('Quando o token não for válido', () => {
    before(async () => {
      try {
        const token = 123456;

        postOrders = await chai.request(app)
          .post('/orders')
          .set('authorization', token)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 401 - HTTP Not Found', async () => {
      const { status } = postOrders;

      expect(status).to.be.equals(401);
    });

    it('retorna uma mensagem `Expired or invalid token`', async () => {
      const { body: { message } } = postOrders;

      expect(message).to.be.equals('Expired or invalid token');
    });
  });

  describe('Quando a venda for cadastrada', () => {
    before(async () => {
      try {
        const token = await chai.request(app)
          .post('/login')
          .send({
            email: 'zebirita@email.com',
            password: '1c37466c159755ce1fa181bd247cb925'
          })
          .then((res) => res.body.token);
        
          postOrders = await chai.request(app)
          .post('/orders')
          .set('authorization', token)
          .send({
            userId: 3,
            sellerId: 2,
            products: [
              {id: 1, quantity: 2},
              {id: 2, quantity: 3 }
            ],
            totalPrice: 20.00,
            deliveryAddress: "Ruas das ruas",
            deliveryNumber: 907
          })
      } catch (error) {
        console.error(e.message);
      }
    });

    it('retorna 201 - HTTP Created', async () => {
      const { status } = postOrders;

      expect(status).to.be.equals(201);
    });

    it('retorna um body que não é vazio', async () => {
      const { body } = postOrders;

      expect(body).to.not.be.null;
    });

    it('retorna um number', async () => {
      const { body } = postOrders;

      expect(body).to.be.a('number');
    });
  });
});

describe('Rota GET /costumer/:id', () => {
  before(() => stub(console, 'log').returns(true));
  after(() => console.log.restore());

  let getCostumer;
  
  describe('Quando o token não é encontrado', () => {
    before(async () => {
      try {
        getCostumer = await chai.request(app)
          .get('/orders/costumer/3')
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 401 - HTTP Not Found', async () => {
      const { status } = getCostumer;

      expect(status).to.be.equals(401);
    });

    it('retorna uma mensagem `Token not found`', async () => {
      const { body: { message } } = getCostumer;

      expect(message).to.be.equals('Token not found');
    });
  });

  describe('Quando o token não for válido', () => {
    before(async () => {
      try {
        const token = 123456;

        getCostumer = await chai.request(app)
          .get('/orders/costumer/3')
          .set('authorization', token)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 401 - HTTP Not Found', async () => {
      const { status } = getCostumer;

      expect(status).to.be.equals(401);
    });

    it('retorna uma mensagem `Expired or invalid token`', async () => {
      const { body: { message } } = getCostumer;

      expect(message).to.be.equals('Expired or invalid token');
    });
  });

  describe('Quando não retorna a ordem do cliente especificado', () => {
    before(async () => {
      try {
        const token = await chai.request(app)
          .post('/login')
          .send({
            email: 'juninhoPlay@gmail.com',
            password: '123456'
          })
          .then((res) => res.body.token);

        getCostumer = await chai.request(app)
          .get('/orders/costumer/4')
          .set('authorization', token)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 404 - HTTP Not Found', async () => {
      const { status } = getCostumer;

      expect(status).to.be.equals(404);
    });

    it('retorna uma mensagem `Sale does not exist`', async () => {
      const { body: { error } } = getCostumer;

      expect(error).to.be.equals('Sale does not exist');
    });
  });

  describe('Quando retorna a ordem do cliente especificado', () => {
    before(async () => {
      try {
        const token = await chai.request(app)
          .post('/login')
          .send({
            email: 'zebirita@email.com',
            password: '1c37466c159755ce1fa181bd247cb925'
          })
          .then((res) => res.body.token);

        getCostumer = await chai.request(app)
          .get('/orders/costumer/3')
          .set('authorization', token)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 200 - HTTP Ok Status', async () => {
      const { status } = getCostumer;

      expect(status).to.be.equals(200);
    });

    it('retorna um body que não é vazio', async () => {
      const { body } = getCostumer;

      expect(body).to.not.be.null;
    });

    it('retorna um array', async () => {
      const { body } = getCostumer;

      expect(body).to.be.a('array');
    });
  })
});

// describe('', () => {});