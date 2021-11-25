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

const mockNewProduct = {
  name: faker.commerce.product(),
  price: faker.commerce.price(),
  urlImage: faker.image.food(),
};

const mockProductExists = {
  name: "Skol Lata 250ml",
  price: faker.commerce.price(),
  urlImage: faker.image.food(),
};

const mockNoNameProduct = {
  name: "",
  price: faker.commerce.price(),
  urlImage: faker.image.food(),
};

const mockNoPriceProduct = {
  name: faker.commerce.product(),
  urlImage: faker.image.food(),
};

const randomBigNumber = getRandomInt(500, 5000);

const mockEditedProduct = {
  name: `Produto de teste - Id: ${randomBigNumber}`,
  price: 10.0,
  urlImage: faker.image.food(),
};

const mockProductToDelete = {
  name: faker.commerce.product(),
  price: faker.commerce.price(),
  urlImage: faker.image.food(),
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

describe('Testa a rota "/products"', () => {
  describe('Testa o método POST na rota "/products"', () => {
    it("Retorna o status http 201 - CREATED e um objeto contendo o novo produto adicionado", async () => {
      const { status, body } = await requestPostHelper(
        "/products",
        mockNewProduct
      );

      expect(status).to.be.equals(201);
      expect(body).to.be.an("object");
      expect(body).include(mockNewProduct);
    });

    it('Retorna o status http 409 - CONFLICT e a message: "product" is already in the database quando o produto adicionado já constar no banco de dados', async () => {
      const { status, body } = await requestPostHelper(
        "/products",
        mockProductExists
      );

      const expectedMessage = '"product" is already in the database';

      expect(status).to.be.equals(409);
      expect(body.message).include(expectedMessage);
    });

    it('Retorna o status http 400 - BAD REQUEST e a message: ""name" is not allowed to be empty" quando o produto não contiver um name', async () => {
      const { status, body } = await requestPostHelper(
        "/products",
        mockNoNameProduct
      );

      const expectedMessage = '"name" is not allowed to be empty';

      expect(status).to.be.equals(400);
      expect(body.message).include(expectedMessage);
    });

    it('Retorna o status http 400 - BAD REQUEST e a message: ""price" is required" quando o produto não contiver um preço', async () => {
      const { status, body } = await requestPostHelper(
        "/products",
        mockNoPriceProduct
      );

      const expectedMessage = '"price" is required';

      expect(status).to.be.equals(400);
      expect(body.message).include(expectedMessage);
    });
  });

  describe('Testa o método GET na rota "/products"', () => {
    it("Retorna o status http 200 - OK e um array de objetos contendo os dados dos produtos no banco de dados", async () => {
      const { status, body } = await requestGetHelper("/products");

      expect(status).to.be.equals(200);
      expect(body).to.be.an("array");
      expect(body).to.not.be.empty;
    });
  });

  describe('Testa o método GET na rota "/products/:id"', () => {
    it("Retorna o status http 200 - OK contendo um objeto referente ao produto buscado", async () => {
      const id = getRandomInt(3, 5);
      const { status, body } = await requestGetHelper(`/products/${id}`);

      expect(status).to.be.equals(200);
      expect(id).to.be.equals(body.id);
      expect(body).to.be.an("object");
    });

    it('Retorna o status http 404 - NOT FOUND contendo a message: ""product" not found" quando o ID passado não constar no banco de dados', async () => {
      const { status, body } = await requestGetHelper(
        `/products/${randomBigNumber}`
      );

      const expectedMessage = '"product" not found';

      expect(status).to.be.equals(404);
      expect(body.message).to.be.equals(expectedMessage);
    });
  });

  describe('Testa o método PUT na rota "/products/:id"', () => {
    it("Retorna o status http 200 - OK contendo um objeto referente ao produto editado", async () => {
      const id = getRandomInt(1, 5);

      const { status } = await requestPutHelper(
        `/products/${id}`,
        mockEditedProduct
      );

      expect(status).to.be.equals(200);
    });
    it('Retorna o status http 400 - BAD REQUEST e a message: ""name" is not allowed to be empty" quando o produto não contiver um name', async () => {
      const id = getRandomInt(1, 5);

      const { status, body } = await requestPutHelper(
        `/products/${id}`,
        mockNoNameProduct
      );

      const expectedMessage = '"name" is not allowed to be empty';

      expect(status).to.be.equals(400);
      expect(body.message).include(expectedMessage);
    });
    it('Retorna o status http 400 - BAD REQUEST e a message: ""price" is required" quando o produto não contiver um preço', async () => {
      const id = getRandomInt(1, 5);

      const { status, body } = await requestPutHelper(
        `/products/${id}`,
        mockNoPriceProduct
      );

      const expectedMessage = '"price" is required';

      expect(status).to.be.equals(400);
      expect(body.message).include(expectedMessage);
    });
  });

  describe('Testa o método DELETE na rota "/products/:id"', () => {
    it("Retorna o status http 204 - NO CONTENT ao deletar um produto", async () => {
      const { body } = await requestPostHelper(
        "/products",
        mockProductToDelete
      );

      const id = body.id;
      const { status } = await requestDeleteHelper(`/products/${id}`);

      expect(status).to.be.equals(204);
    });

    it('Retorna o status http 404 - NOT FOUND contendo contendo a message: ""product" not found" ao deletar um produto inexistente', async () => {
      const { status, body } = await requestDeleteHelper(
        `/products/${randomBigNumber}`
      );

      const expectedMessage = '"product" not found';

      expect(status).to.be.equals(404);
      expect(body.message).to.be.equals(expectedMessage);
    });
  });
});
