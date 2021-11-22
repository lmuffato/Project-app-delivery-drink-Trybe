const { expect } = require('chai');
const frisby = require('frisby');

const url = 'http://localhost:3001';

describe('03 - Retorno de busca por produtos', () => {
  describe('Busca do tipo getAll', () => {
    it('Retorna o código de status 200', async () => {
      await frisby
        .get(`${url}/products`)
        .expect('status', 200)
    });

    it('Retorna um objeto', async () => {
      await frisby
        .get(`${url}/products`)
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.be.a('object');
        })
    });

    it('Retorna um array dentro do objeto', async () => {
      await frisby
        .get(`${url}/products`)
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.products).to.be.a('array');
        })
    });

    it('Retorna um array com length = 11', async () => {
      await frisby
        .get(`${url}/products`)
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.products.length).to.be.equals(11);
        })
    });
  });

  describe('Busca por id', () => {
    it('Retorna o código de status 200', async () => {
      await frisby
        .get(`${url}/products/1`)
        .expect('status', 200)
    });

    it('Retorna um objeto', async () => {
      await frisby
        .get(`${url}/products/1`)
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.be.a('object');
        })
    });

    it('O objeto contém os dados do primeiro item', async () => {
      await frisby
        .get(`${url}/products/1`)
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.name).to.be.equals('Skol Lata 250ml');
          expect(result.price).to.be.equals('2.20');
          expect(result.image).to.be.equals('http://localhost:3001/images/skol_lata_350ml.jpg');
        })
    });
  });
});
