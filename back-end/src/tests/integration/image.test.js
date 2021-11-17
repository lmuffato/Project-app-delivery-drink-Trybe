const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Rota GET /images/:file ', () => {
  before(() => stub(console, 'log').returns(true));
  after(() => console.log.restore());

  let getImage;
  const nameImage = 'brahma_600ml.jpg';

  describe('Quando se é buscado uma imagem', () => {
    before(async () => {
      try {
        getImage = await chai.request(app)
          .get(`/images/${nameImage}`)
      } catch (e) {
        console.error(e.message);
      }
    });

    it('retorna 200 - HTTP Ok Status', async () => {
      const { status } = getImage;

      expect(status).to.be.equals(200);
    });

    it('retorna um body que não é vazio', async () => {
      const { body } = getImage;

      expect(body).to.not.be.null;
    });
  });
});