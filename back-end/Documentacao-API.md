
Essa API contém dados para o fluxo de: **vendas**, **produtos** , **usuários** e **salesProducts**.



**Fluxo de usuários**

 1. **Criando** um usuário através da rota `POST/register` 
 

Uma requisição passada através da *`URL localhost:3001/register`* e passando os seguintes dados no corpo:

    {
    	"name": "usuarioTeste",
    	"email": "usuarioTeste@email.com",
    	"password": "senhaTeste",
    	"role":  "customer"
    }

Retornará  os seguintes dados:

    {
      "id": 5,
      "name": "usuarioTeste",
      "email": "usuarioTeste@email.com",
      "password": "2e05e18506c3a9c638799b9284c67791",
      "role": "customer"
    }

 2. **Logando** um usuário no sistema através da rota `POST /login`


Uma requisição passada através da *URL localhost:3001/login* e passando os seguintes dados no corpo:

    {
    	"email": "usuarioTeste@email.com",
    	"password": "senhaTeste"
    }

Retornará  os seguintes dados:

    {
      "name": "usuarioTeste",
      "email": "usuarioTeste@email.com",
      "role": "customer",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6eyJpZCI6NywibmFtZSI6InVzdWFyaW9UZXN0ZSIsImVtYWlsIjoidXN1YXJpb1Rlc3RlQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiMmUwNWUxODUwNmMzYTljNjM4Nzk5YjkyODRjNjc3OTEiLCJyb2xlIjoiY3VzdG9tZXIifSwiaWF0IjoxNjM3MzcxMDU3LCJleHAiOjE2Mzc0MTQyNTd9.Y4A1LmH_zQKcnTrWY9Z-VfcdzEgtww_4RQTRu5Oy2Xs"
    }

 3. **Exibindo** todos os usuários através da rota `GET /register`.


Uma requisição passada através da *URL localhost:3001/register* retornará a seguinte resposta:


    [
      {
        "id": 1,
        "name": "Delivery App Admin",
        "email": "adm@deliveryapp.com",
        "password": "a4c86edecc5aee06eff8fdeda69e0d04",
        "role": "administrator"
      },
      {
        "id": 2,
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "password": "3c28d2b0881bf46457a853e0b07531c6",
        "role": "seller"
      },
      {
        "id": 3,
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "password": "1c37466c159755ce1fa181bd247cb925",
        "role": "customer"
      },
      {
        "id": 4,
        "name": "Bruno Renan da Luz",
        "email": "brunorenandaluz@email.com.br",
        "password": "C3UkymZebj",
        "role": "customer"
      },
      {
        "id": 5,
        "name": "usuarioTeste",
        "email": "usuarioTeste@email.com",
        "password": "2e05e18506c3a9c638799b9284c67791",
        "role": "customer"
      }
    ]

 4. **Deletando** um usuário através da rota `DELETE /register`.

Uma requisição passada através da *URL localhost:3001/register/5* vai deletar o usuário, o status vai vir 200 e o corpo da requisição vai vir vazio

**Fluxo de vendas:**

 1. **Criando** vendas através da rota ***POST /sales***.

Exemplo de requisição passada através da *URL: POST localhost:3001/sales* e passando os seguintes dados no corpo:


    {
      "userId": 3,
      "sellerId": 2, 
      "totalPrice": 150.1, 
      "deliveryAddress": "Rua Antônio Sabino", 
      "deliveryNumber": "802", 
      "saleDate": "2021/12/18", 
      "status": "Pendente",
      "products":  [{ "productId": 3, "quantity": 15 }]
    }

Retornará os seguintes dados:

    {
      "id": 4,
      "totalPrice": 150.1,
      "userId": 3,
      "sellerId": 2,
      "deliveryAddress": "Rua Antônio Sabino",
      "deliveryNumber": "802",
      "saleDate": "2021-12-18T03:00:00.000Z",
      "status": "Pendente"
    }

 

 2.  **Exibindo** todas as vendas através da rota ***GET /sales***

Exemplo de requisição *GET localhost:3001/sales* retornará a seguinte resposta:

    
      [
	      {
	        "id": 1,
	        "userId": 3,
	        "sellerId": 2,
	        "totalPrice": "29.30",
	        "deliveryAddress": "Rua T 15 - Taquaralto - TO",
	        "deliveryNumber": "712",
	        "saleDate": "2021-12-01T00:00:00.000Z",
	        "status": "em andamento",
	        "user_id": {
	          "id": 3,
	          "name": "Cliente Zé Birita",
	          "email": "zebirita@email.com",
	          "role": "customer"
	        },
	        "product": [
	          {
	            "id": 2,
	            "name": "Heineken 600ml",
	            "price": "7.50",
	            "url_image": "http://localhost:3001/images/heineken_600ml.jpg",
	            "SalesProduct": {  "saleId": 1, "productId": 2, "quantity": 6 }
	          }
	        ]
	      },
	      { outras vendas serão retornadas dentro de objetos semelhantes ao objeto acima }
      ],

>  A resposta dessa requisição trás dados de 4 tabelas
>  - **sales**: retorna dados do pedido disparado pelo cliente.
>  - **users**: representado pelo campo '**user_id**' e vai retornar dados do cliente que está fazendo o pedido.
>  - **product**: está ligado a tabela products e vai retornar dados do produto do pedido.
>  - **salesProducts**: é uma tabela intermediária entre sales e products.

l

 3. **Atualizando**  o **status** uma venda através da rota **PUT /sales/:id**.

Esse id corresponde ao id da venda.

Exemplo de requisição *PUT localhost:3001/sales/1* passando os seguintes dados no corpo:


    {
    	"status": "concluido"
    }

Retornará a seguinte resposta:

    {
        "id": 1,
        "userId": 3,
        "sellerId": 2,
        "totalPrice": "29.30",
        "deliveryAddress": "Rua T 15 - Taquaralto - TO",
        "deliveryNumber": "712",
        "saleDate": "2021-12-01T00:00:00.000Z",
        "status": "concluido",
        "user_id": {
          "id": 3,
          "name": "Cliente Zé Birita",
          "email": "zebirita@email.com",
          "role": "customer"
        },
        "product": [
          {
            "id": 2,
            "name": "Heineken 600ml",
            "price": "7.50",
            "url_image": "http://localhost:3001/images/heineken_600ml.jpg",
            "SalesProduct": {  "saleId": 1, "productId": 2, "quantity": 6 }
          }
        ]
	  }


**Fluxo de produtos**

 1. **Exibindo** todos os produtos através da rota `GET /products`.

Uma requisição com a *URL localhost:3001/sales* retornará a seguinte resposta:


     [
      {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2.20",
        "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg",
        "sales": []
      },
      {
        "id": 2,
        "name": "Heineken 600ml",
        "price": "7.50",
        "url_image": "http://localhost:3001/images/heineken_600ml.jpg",
        "sales": [
          {
            "id": 1,
            "userId": 3,
            "sellerId": 2,
            "totalPrice": "29.30",
            "deliveryAddress": "Rua T 15 - Taquaralto - TO",
            "deliveryNumber": "712",
            "saleDate": "2021-12-01T00:00:00.000Z",
            "status": "concluido",
            "SalesProduct": { "saleId": 1, "productId": 2, "quantity": 6 }
          }, 
          { caso existisse mais de um venda, iria vir dentro de um objeto semelhante ao de cima }
        ]
       }, { no banco de dados existem ao todo 11 produtos pré cadastrados }
      },
      

> o campo **sales** corresponde as vendas que aquele produto teve ou não, no exemplo acima o produto com id:1 não teve venda, mas o produto com id:2 teve venda

 2. **Exibe** um produto através da rota `GET /products`.

Uma requisição passada através da *URL localhost:3001/products/1* retornará a seguinte resposta:


       {
          "id": 1,
          "name": "Skol Lata 250ml",
          "price": "2.20",
          "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg"
        }





