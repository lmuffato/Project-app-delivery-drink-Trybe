const chai = require("chai");
const { expect } = require("chai");
const faker = require("faker");
const chaiHttp = require("chai-http");
const app = require("../api/app");

chai.use(chaiHttp);

const mockTrueUser = {
  email: "zebirita@email.com",
  password: "$#zebirita#$",
};

const mockLoginError = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const mockLoginNoPassword = {
  email: "teste@testando.com",
  password: "",
};

const mockLoginInvalidPassword = {
  email: "teste@testando.com",
  password: "123",
};

const requestHelper = async (body) => {
  return chai.request(app).post("/login").send(body);
};

describe('Testa a rota "/login"', () => {
  describe("Testa o resultado de requisição de login bem sucedida", () => {
    it("Retorna o status http 200 - OK caso o usuário exista e um objeto contendo referente ao usuário que logou", async () => {
      const { status, body } = await requestHelper(mockTrueUser);

      const ApiReturns = {
        id: 3,
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        role: "customer",
      };

      expect(status).to.be.equals(200);
      expect(body).to.be.an("object");
      expect(body).include(ApiReturns);
    });
  });

  describe("Testa o resultado de requisição de login feita por usuário não cadastrado no banco de dados", () => {
    it("Retorna o status http 404 - NOT FOUND com a message: 'Incorrect username or password'", async () => {
      const { status, body } = await requestHelper(mockLoginError);

      expect(status).to.be.equals(404);
      expect(body.message).to.be.equals("Incorrect username or password");
    });
  });

  describe("Testa o resultado de requisição de login feita por usuário sem passar a senha", () => {
    it("Retorna o status http 400 - BAD REQUEST com a message: '\"password\" is not allowed to be empty'", async () => {
      const { status, body } = await requestHelper(mockLoginNoPassword);

      const expectedMessage = '"password" is not allowed to be empty';

      expect(status).to.be.equals(400);
      expect(body.message).include(expectedMessage);
    });
  });

  describe("Testa o resultado de requisição de login feita por usuário que passa senha menor de 6 caracteres", () => {
    it("Retorna o status http 400 - BAD REQUEST com a message: '\"password\" length must be at least 6 characters long'", async () => {
      const { status, body } = await requestHelper(mockLoginInvalidPassword);

      const expectedMessage =
        '"password" length must be at least 6 characters long';

      expect(status).to.be.equals(400);
      expect(body.message).include(expectedMessage);
    });
  });
});
