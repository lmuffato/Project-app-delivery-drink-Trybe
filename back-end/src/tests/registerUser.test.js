const { expect } = require('chai');
const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('02 - Registrar novo usuário', () => {
  
  shell.cd('..');
  shell.exec('npm run db:reset');
  
  describe('Quando cria usuário com sucesso', () => {
    
    it('Retorna o código de status 201', async () => {
      await frisby
        .post(`${url}/register`,
          {
            "name": "Silvano Silva e Silva",
            "email": "silvanosilvaesilva@email.com",
            "password": "123456",
            "role": "customer"
          })
        .expect('status', 201)
    });

    it('Retorna um objeto', async () => {
      await frisby
        .post(`${url}/register`,
          {
            "name": "Fulano Silva e Silva",
            "email": "fulanosilvaesilva@email.com",
            "password": "123456",
            "role": "customer"
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.be.a('object');
        })
    });

   it('A chave message retorna o valor correto', async () => {
      await frisby
        .post(`${url}/register`,
          {
            "name": "Siclano Silva e Silva",
            "email": "siclanosilvaesilva@email.com",
            "password": "123456",
            "role": "customer"
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.message).to.be.equals('User Siclano Silva e Silva created');
        })
    }); 
  });

  describe('Quando tenta criar usuário já existente', () => {
    
    it('Retorna o código de status 409', async () => {
      await frisby
        .post(`${url}/register`,
          {
            "name": "Silvano Silva e Silva",
            "email": "silvanosilvaesilva@email.com",
            "password": "123456",
            "role": "customer"
          })
        .expect('status', 409)
    });

    it('Retorna um objeto', async () => {
      await frisby
        .post(`${url}/register`,
          {
            "name": "Silvano Silva e Silva",
            "email": "silvanosilvaesilva@email.com",
            "password": "123456",
            "role": "customer"
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result).to.be.a('object');
        })
    });

   it('A chave error.message retorna o valor correto', async () => {
      await frisby
        .post(`${url}/register`,
          {
            "name": "Silvano Silva e Silva",
            "email": "silvanosilvaesilva@email.com",
            "password": "123456",
            "role": "customer"
          })
        .then ((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.error.message).to.be.equals('User already registered');
        })
    }); 
  });

  describe('Quando recebe campos com erro ao criar usuário', () => {
    describe('Campo de nome vazio', () => {
      it('Retorna o código de status 400', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "",
              "email": "silvanosilvaesilva@email.com",
              "password": "123456",
              "role": "customer"
            })
          .expect('status', 400)
      });
  
      it('Retorna um objeto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "",
              "email": "silvanosilvaesilva@email.com",
              "password": "123456",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result).to.be.a('object');
          })
      });
  
      it('A chave error.message retorna o valor correto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "",
              "email": "silvanosilvaesilva@email.com",
              "password": "123456",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result.error.message).to.be.equals('\"name\" is not allowed to be empty');
          })
      });
    });

    describe('Campo de email vazio', () => {
      it('Retorna o código de status 400', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "",
              "password": "123456",
              "role": "customer"
            })
          .expect('status', 400)
      });
  
      it('Retorna um objeto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "",
              "password": "123456",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result).to.be.a('object');
          })
      });
  
      it('A chave error.message retorna o valor correto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "",
              "password": "123456",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result.error.message).to.be.equals('\"email\" is not allowed to be empty');
          })
      });
    });

    describe('Campo de senha(password) vazia', () => {
      it('Retorna o código de status 400', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "silvanosilvaesilva@email.com",
              "password": "",
              "role": "customer"
            })
          .expect('status', 400)
      });
  
      it('Retorna um objeto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "silvanosilvaesilva@email.com",
              "password": "",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result).to.be.a('object');
          })
      });
  
      it('A chave error.message retorna o valor correto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "silvanosilvaesilva@email.com",
              "password": "",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result.error.message).to.be.equals('\"password\" is not allowed to be empty');
          })
      });
    });

    describe('Campo de senha(password) tamanho inválido', () => {
      it('Retorna o código de status 400', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "silvanosilvaesilva@email.com",
              "password": "12345",
              "role": "customer"
            })
          .expect('status', 400)
      });
    
      it('Retorna um objeto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "silvanosilvaesilva@email.com",
              "password": "12345",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result).to.be.a('object');
          })
      });
    
      it('A chave error.message retorna o valor correto', async () => {
        await frisby
          .post(`${url}/register`,
            {
              "name": "Silvano Silva e Silva",
              "email": "silvanosilvaesilva@email.com",
              "password": "12345",
              "role": "customer"
            })
          .then ((response) => {
            const { body } = response;
            const result = JSON.parse(body);
            expect(result.error.message).to.be.equals('\"password\" length must be at least 6 characters long');
          })
      });
    });

    // describe('Campo de role vazio', () => {
    //   it('Retorna o código de status 400', async () => {
    //     await frisby
    //       .post(`${url}/register`,
    //         {
    //           "name": "Fulano Silva e Silva",
    //           "email": "Fulanosilvaesilva@email.com",
    //           "password": "123456",
    //           "role": ""
    //         })
    //       .expect('status', 400)
    //   });
  
    //   it('Retorna um objeto', async () => {
    //     await frisby
    //       .post(`${url}/register`,
    //         {
    //           "name": "Siclano Silva e Silva",
    //           "email": "Siclanosilvaesilva@email.com",
    //           "password": "123456",
    //           "role": ""
    //         })
    //       .then ((response) => {
    //         const { body } = response;
    //         const result = JSON.parse(body);
    //         expect(result).to.be.a('object');
    //       })
    //   });
  
    //   it('A chave error.message retorna o valor correto', async () => {
    //     await frisby
    //       .post(`${url}/register`,
    //         {
    //           "name": "Beltrano Silva e Silva",
    //           "email": "beltranosilvaesilva@email.com",
    //           "password": "123456",
    //           "role": ""
    //         })
    //       .then ((response) => {
    //         const { body } = response;
    //         const result = JSON.parse(body);
    //         expect(result.error.message).to.be.equals('\"role\" is not allowed to be empty');
    //       })
    //   });
    // });
  });
});
