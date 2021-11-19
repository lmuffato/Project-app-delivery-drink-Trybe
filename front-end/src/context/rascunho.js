objPattern = {
  userId: '', // Tela de login - Ao fazer login com sucessom, insere o id do usuário nesse campo
  products: [], // Tela de produtos (vai inserindo itens no array de objs com o padrão acima)
  sellerId: '', // Tela checkout (seleciona o vendedor pelo nome e insere o id do vendedor)
  deliveryAddress: '', // Tela checkout (preenche com o endereço)
  delivery_number: '', // Tela checkout (preenche com o numero do endereço)
  saleDate: '', // Tela checkout - Ao apertar o botão "finalizar", preenche com a data atual;
  status: 'pendente', // Tela checkout - Ao apertar o botão "finalizar", preenche com a pendente;
};

// Faz login -> Gera token -> Salva no local storage -> login: {}

// Service -> toda rota, busca o token no local storage, verifica a validação
// Rotas da aplicação -> T
