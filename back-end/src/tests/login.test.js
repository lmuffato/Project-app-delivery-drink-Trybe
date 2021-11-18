const chai = require("chai");
const { expect } = require("chai");
const faker = require("faker");
const { stub } = require("sinon");
const chaiHttp = require("chai-http");
const app = require("../api/app");

chai.use(chaiHttp);

const mockTrueUser = {
  email: "teste@testando.com",
  password: "12345678"
};

const mockLoginError = {
  email: faker.internet.email(),
  password: faker.internet.password()
};

const mockLoginNoPassword = {
  email: "teste@testando.com",
  password: ""
};

const mockLoginInvalidPassword = {
  email: "teste@testando.com",
  password: "123"
};

const requestHelper = async (body) => {
  return chai.request(app).post("/login").send(body);
}

describe('Testa a rota "/login"', () => {

  it("Retorna o status http 200 - OK caso o usuário exista", async () => {
    const { status } = await requestHelper(mockTrueUser);

    expect(status).to.be.equals(200);
  });

  it("Retorna um objeto contendo o id, name, email e role do usuário que efetuou login", async () => {
    const { body } = await requestHelper(mockTrueUser);
    const ApiReturns = {
      id: 4,
      name: 'Testando MySQL',
      email: 'teste@testando.com',
      role: 'customer',
    }

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
  it("Retorna o status http 401 - UNAUTHORIZED com a message: '\"password\" is not allowed to be empty'", async () => {
    const { status, body } = await requestHelper(mockLoginNoPassword);

    expect(status).to.be.equals(401);
    expect(body.message).to.be.equals("\"password\" is not allowed to be empty");
  });
});

describe("Testa o resultado de requisição de login feita por usuário que passa senha menor de 6 caracteres", () => {
  it("Retorna o status http 404 - NOT FOUND com a message: '\"password\" length must be at least 6 characters long'", async () => {
    const { status, body } = await requestHelper(mockLoginInvalidPassword);

    expect(status).to.be.equals(401);
    expect(body.message).to.be.equals("\"password\" length must be at least 6 characters long");
  });
});
