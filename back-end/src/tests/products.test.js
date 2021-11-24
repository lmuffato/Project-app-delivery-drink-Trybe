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

// const randomBigNumber = getRandomInt(500, 5000);

// const mockEditedUser = {
//   name: `Usuário de teste - Id: ${randomBigNumber}`,
//   email: faker.internet.email(),
//   password: faker.internet.password(),
//   role: 'customer'
// };

// const mockEditedInvalidPassword = {
//   name: `Usuário de teste - Id: ${randomBigNumber}`,
//   email: faker.internet.email(),
//   password: '',
//   role: 'customer'
// };

// const mockInvalidUser = {
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   password: "",
// };

const requestPostHelper = async (endpoint, body) => {
  return chai.request(app).post(endpoint).send(body).set("Authorization", token);
};

// const requestGetHelper = async (endpoint) => {
//   return chai.request(app).get(endpoint).set("Authorization", token);
// };

// const requestPutHelper = async (endpoint, body) => {
//   return chai.request(app).put(endpoint).send(body).set("Authorization", token);
// };

// const requestDeleteHelper = async (endpoint) => {
//   return chai.request(app).delete(endpoint).set("Authorization", token);
// };

describe('Testa a rota "/products"', () => {
  describe('Testa o método POST na rota "/products"', () => {
    it("Retorna o status http 201 - CREATED e um objeto contendo o novo produto adicionado", async () => {
      const { status, body } = await requestPostHelper(
        "/products",
        mockNewProduct
      );

      console.log(mockNewProduct);

      expect(status).to.be.equals(201);
      expect(body).to.be.an("object");
      expect(body).include(mockNewProduct);
    });

    // it('Retorna o status http 406 - NOT ACCEPTABLE e a message: "Password is required" quando o novo usuário a ser cadastrado não posui senha', async () => {
    //   const { status, body } = await requestPostHelper(
    //     "/users/register",
    //     mockInvalidUser
    //   );

    //   const expectedMessage = '"password" is not allowed to be empty';

    //   expect(status).to.be.equals(400);
    //   expect(body.message).include(expectedMessage);
    // });
  });

//   describe('Testa o método GET na rota "/users"', () => {
//     it("Retorna o status http 200 - OK e um array de objetos contendo os dados dos usuários no banco de dados", async () => {
//       const { status, body } = await requestGetHelper("/users");

//       expect(status).to.be.equals(200);
//       expect(body).to.be.an("array");
//       expect(body).to.not.be.empty;
//     });
//   });

//   describe('Testa o método GET na rota "/users/:id"', () => {
//     it("Retorna o status http 200 - OK contendo um objeto referente ao usuário buscado", async () => {
//       const id = getRandomInt(1, 5);
//       const { status, body } = await requestGetHelper(`/users/${id}`);

//       expect(status).to.be.equals(200);
//       expect(id).to.be.equals(body.id);
//       expect(body).to.be.an("object");
//     });

//     it('Retorna o status http 404 - NOT FOUND contendo a message ""user" not found" quando o ID passado não constar no banco de dados', async () => {
//       const id = getRandomInt(500, 1000);

//       const { status, body } = await requestGetHelper(`/users/${id}`);

//       const expectedMessage = '"user" not found';

//       expect(status).to.be.equals(404);
//       expect(body.message).to.be.equals(expectedMessage);
//     });
//   });

//   describe('Testa o método PUT na rota "/users/:id"', () => {
//     it('Retorna o status http 200 - OK contendo um objeto referente ao usuário editado', async () => {
//       const id = getRandomInt(1, 5);

//       const { status } = await requestPutHelper(`/users/${id}`, mockEditedUser);

//       expect(status).to.be.equals(200);
//     });
//     it('Retorna o status http 406 - NOT ACCEPTABLE contendo a message: ""password" is not allowed to be empty" quando uma senha não é fornecida', async () => {
//       const id = getRandomInt(1, 5);

//       const { status, body } = await requestPutHelper(`/users/${id}`, mockEditedInvalidPassword);

//       const expectedMessage = '"password" is not allowed to be empty';

//       expect(status).to.be.equals(400);
//       expect(body.message).to.be.equals(expectedMessage);
//     });
//   });

//   describe('Testa o método DELETE na rota "/users/:id"', () => {
//     it('Retorna o status http 200 - OK contendo contendo a message: "Usuário deletado com sucesso" ao deletar um usuário', async () => {
//       const id = getRandomInt(1, 5);
//       const { status, body } = await requestDeleteHelper(`/users/${id}`);

//       // const expectedMessage = "Usuário deletado com sucesso";
//       console.log(body)

//       expect(status).to.be.equals(200);
//       // expect(body.message).to.be.equals(expectedMessage);
//     });

//     it('Retorna o status http 404 - NOT FOUND contendo contendo a message: ""user" not found" ao deletar um usuário inexistente', async () => {
//       const { status, body } = await requestDeleteHelper(`/users/${randomBigNumber}`);

//       const expectedMessage = '"user" not found';

//       expect(status).to.be.equals(404);
//       expect(body.message).to.be.equals(expectedMessage);
//     });
//   });
});
