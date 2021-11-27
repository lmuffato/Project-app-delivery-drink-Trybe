import React, { useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import NewOrderContext from './NewOrderContext';

// const oderListExemple = [ // Apenas como exemplo, deve ser excluído apos funcionalidade
//   { productId: 1, name: 'cerveja', quantity: 10, price: 8 },
//   { productId: 2, name: 'cachaça', quantity: 2, price: 10 },
//   { productId: 3, name: 'vinho', quantity: 1, price: 60 },
//   { productId: 4, name: 'whisk', quantity: 5, price: 80 },
// ];

// const sellersListExample = [ // Apenas como exemplo, deve ser excluído apos funcionalidade
//   { id: 1, name: 'Lewis Hamilton' },
//   { id: 2, name: 'Michael Schumacher' },
// ];

// const userIdExemple = 1; // Apenas como exemplo, deve ser excluído apos funcionalidade
// const userNameExample = 'Lucas'; // Apenas como exemplo, deve ser excluído apos funcionalidade

function NewOrderProvider({ children }) {
  const [userId, setUserId] = useState(''); // Preenche na tela de login
  const [userName, setUserName] = useState(''); // Preenche na tela de login
  // Salvar itens da lista nessa variável
  const [itensList, setItensList] = useState([]); // Prenchente na tela de produtos
  const [sellersList, setSellersList] = useState([]); // Carrega os dados do sequelize com os nomes e ids dos vendedores (usuários com role adm)
  const [sellerId, setSellerId] = useState(''); // id do vendedor
  const [deliveryAddress, setDeliveryAddress] = useState(''); // endereço de entrega
  const [deliveryNumber, setDeliveryNumber] = useState(''); // numero do endereço
  const [totalPrice, setTotalPrice] = useState(''); // valor total do pedido
  const [orderItensList, setOrderItensList] = useState([]); // detalhe da venda concluída
  const [orderSale, setOrderSale] = useState({}); // detalhe da venda concluída
  const [disableBtnCustomer, setDisableBtnCustomer] = useState(true); // detalhe da venda concluída

  // useEffect(() => {
  //   console.log(itensList, 'aaaaaaaaaaaaa');
  // }, [itensList]);
  const [navBarSair, setNavBarSair] = useState(false);

  // localStorage.clear();

  useEffect(() => {
    // localStorage.clear();
    setItensList([]);
  }, [navBarSair]);

  return (
    <NewOrderContext.Provider
      value={ {
        userId, // Tela de login (recebe do banco de dados)
        setUserId,

        userName, // Tela de login (recebe do banco de dados)
        setUserName,

        itensList, // Tela de produtos (recebe do usuário)
        setItensList,

        sellersList, // Tela checkout (recebe do banco de dados)
        setSellersList,

        sellerId, // Tela checkout (recebe do input do usuário)
        setSellerId,

        deliveryAddress, // Tela checkout (recebe do input do usuário)
        setDeliveryAddress,

        deliveryNumber, // Tela checkout (recebe do input do usuário)
        setDeliveryNumber,

        totalPrice, // Tela checkout (valor automático)
        setTotalPrice,

        orderItensList,
        setOrderItensList,
        orderSale,
        setOrderSale,

        navBarSair,
        setNavBarSair,

        disableBtnCustomer,
        setDisableBtnCustomer,

      } }
    >
      {children}
    </NewOrderContext.Provider>
  );
}

NewOrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewOrderProvider;
