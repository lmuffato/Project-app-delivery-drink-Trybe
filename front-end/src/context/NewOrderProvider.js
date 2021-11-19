import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewOrderContext from './NewOrderContext';

const userIdExemple = 1; // Apenas como exemplo, deve ser excluído apos funcionalidade

const oderListExemple = [ // Apenas como exemplo, deve ser excluído apos funcionalidade
  { productId: 1, name: 'cerveja', quantity: 10, price: 8 },
  { productId: 2, name: 'cachaça', quantity: 2, price: 10 },
  { productId: 3, name: 'vinho', quantity: 1, price: 60 },
  { productId: 4, name: 'whisk', quantity: 5, price: 80 },
];

const sellersListExample = [ // Apenas como exemplo, deve ser excluído apos funcionalidade
  { id: 1, name: 'Lewis Hamilton' },
  { id: 2, name: 'Michael Schumacher' },
];

const userNameExample = 'Lucas'; // Apenas como exemplo, deve ser excluído apos funcionalidade

function NewOrderProvider({ children }) {
  const [userId, setUserId] = useState(userIdExemple); // Preenche na tela de login
  const [userName, setUserName] = useState(userNameExample); // Preenche na tela de login
  const [itensList, setItensList] = useState(oderListExemple); // Prenchente na tela de produtos
  const [sellersList, setSellersList] = useState(sellersListExample); // Carrega os dados do sequelize com os nomes e ids dos vendedores (usuários com role adm)
  const [sellerId, setSellerId] = useState(''); // id do vendedor
  const [deliveryAddress, setDeliveryAddress] = useState(''); // endereço de entrega
  const [addressNumber, setAddressNumber] = useState(''); // numero do endereço

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

        addressNumber, // Tela checkout (recebe do input do usuário)
        setAddressNumber,
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
