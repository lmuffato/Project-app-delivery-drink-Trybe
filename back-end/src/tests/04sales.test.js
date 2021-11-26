const chai = require("chai");
const { expect } = require("chai");
const faker = require("faker");
const chaiHttp = require("chai-http");
const app = require("../api/app");

chai.use(chaiHttp);

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjM3Njk2Njg2fQ.F5RblxMueIXmtL13rO2I2So9Tt0PXEJg8Br_UETiliI";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomBigNumber = getRandomInt(500, 5000);

const mockNewSale = {
  userId: getRandomInt(1, 5),
  sellerId: getRandomInt(1, 5),
  totalPrice: getRandomInt(100, 1000),
  deliveryAddress: faker.address.streetName(),
  deliveryNumber: getRandomInt(1, 1000).toString(),
  status: "pendente",
  cart: [3],
};

const mockEditedSale = {
  userId: getRandomInt(1, 5),
  sellerId: getRandomInt(1, 5),
  totalPrice: getRandomInt(100, 1000),
  deliveryAddress: faker.address.streetName(),
  deliveryNumber: getRandomInt(1, 1000).toString(),
  status: "pendente",
  cart: [3],
};

const mockSaleToDelete = {
  userId: getRandomInt(1, 5),
  sellerId: getRandomInt(1, 5),
  totalPrice: getRandomInt(100, 1000),
  deliveryAddress: faker.address.streetName(),
  deliveryNumber: getRandomInt(1, 1000).toString(),
  status: "pendente",
  cart: [3],
};

const requestPostHelper = async (endpoint, body) => {
  return chai
    .request(app)
    .post(endpoint)
    .send(body)
    .set("Authorization", token);
};

const requestGetHelper = async (endpoint) => {
  return chai.request(app).get(endpoint).set("Authorization", token);
};

const requestPutHelper = async (endpoint, body) => {
  return chai.request(app).put(endpoint).send(body).set("Authorization", token);
};

const requestDeleteHelper = async (endpoint) => {
  return chai.request(app).delete(endpoint).set("Authorization", token);
};

describe('Testa a rota "/sales"', () => {
  describe('Testa o método POST na rota "/sales"', () => {
    it("Retorna o status http 201 - CREATED e um objeto contendo a nova venda adicionada", async () => {
      const { status, body } = await requestPostHelper("/sales", mockNewSale);
      const newSale = mockNewSale;
      delete mockNewSale.cart;

      expect(status).to.be.equals(201);
      expect(body).to.be.an("object");
      expect(body).include(newSale);
    });
  });

  describe('Testa o método GET na rota "/sales"', () => {
    it("Retorna o status http 200 - OK e um array de objetos contendo os dados das vendas no banco de dados", async () => {
      const { status, body } = await requestGetHelper("/sales");

      expect(status).to.be.equals(200);
      expect(body).to.be.an("array");
      expect(body).to.not.be.empty;
    });
  });

  describe('Testa o método GET na rota "/sales/:id"', () => {
    it("Retorna o status http 200 - OK contendo um objeto referente a venda buscada", async () => {
      const id = 1;
      const { status, body } = await requestGetHelper(`/sales/${id}`);

      expect(status).to.be.equals(200);
      expect(id).to.be.equals(body.id);
      expect(body).to.be.an("object");
    });

    it('Retorna o status http 404 - NOT FOUND contendo a message: ""sale" not found" quando o ID passado não constar no banco de dados', async () => {
      const { status, body } = await requestGetHelper(
        `/sales/${randomBigNumber}`
      );

      const expectedMessage = '"sale" not found';

      expect(status).to.be.equals(404);
      expect(body.message).to.be.equals(expectedMessage);
    });
  });

  describe('Testa o método PUT na rota "/sales/:id"', () => {
    it("Retorna o status http 200 - OK contendo um objeto referente à venda editada", async () => {
      const id = getRandomInt(3, 5);

      const { status } = await requestPutHelper(`/sales/${id}`, mockEditedSale);

      expect(status).to.be.equals(200);
    });
  });

  describe('Testa o método DELETE na rota "/sales/:id"', () => {
    it("Retorna o status http 204 - NO CONTENT ao deletar uma venda", async () => {
      const { body } = await requestPostHelper("/sales", mockSaleToDelete);

      const id = body.id;
      const { status } = await requestDeleteHelper(`/sales/${id}`);

      expect(status).to.be.equals(204);
    });

    it('Retorna o status http 404 - NOT FOUND contendo contendo a message: ""sale" not found" ao deletar uma venda inexistente', async () => {
      const { status, body } = await requestDeleteHelper(
        `/sales/${randomBigNumber}`
      );

      const expectedMessage = '"sale" not found';

      expect(status).to.be.equals(404);
      expect(body.message).to.be.equals(expectedMessage);
    });
  });
});
