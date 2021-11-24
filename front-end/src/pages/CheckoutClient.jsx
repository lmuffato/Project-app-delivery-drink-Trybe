import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/header';
import Context from '../context/Context';
import Table from '../components/table';

function CheckoutClient() {
  const { post, shoppingCart, total } = useContext(Context);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [sellerId, setSellerId] = useState('');
  const [delivery, setDelivery] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setDelivery({ ...delivery, [id]: value });
  };

  const handleSubmit = async () => {
    if (
      delivery.deliveryAddress.trim() === ''
      || delivery.deliveryNumber.trim() === ''
      || sellerId === ''
    ) {
      setError('Preencha todos os campos');
    } else {
      const productIds = Object.keys(shoppingCart);
      const submitCart = {};
      productIds.forEach((id) => {
        console.log(id);
        submitCart[id] = shoppingCart[id].productQuant;
      });

      const totalConvertedToNumber = Number(total.replace(',', '.')).toFixed(2);
      const data = {
        shoppingCart,
        delivery,
        total: totalConvertedToNumber,
        sellerId,
      };

      const { data: { id } } = await post('customer_checkout', data);

      navigate(`/customer/orders/${id}`);
    }
  };

  return (
    <>
      <Header client={ `${'nome'}` } />
      <h1>Finalizar Pedido</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        { Object.keys(shoppingCart)
          .map((item, index) => (<Table
            product={ shoppingCart[item] }
            index={ index }
            key={ `product-${shoppingCart[item].productId}` }
          />))}
      </table>

      <h1 data-testid="customer_checkout__element-order-total-price">
        Total: R$
        { total }
      </h1>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <label htmlFor="vendedor">
          P.Vendedora responsável
          <select
            data-testid="customer_checkout__select-seller"
            value={ sellerId }
            onChange={ ({ target: { value } }) => setSellerId(value) }
          >
            <option value="1">Fulano1</option>
            <option value="2">Fulano2</option>
            <option value="3">Fulano3</option>
          </select>
        </label>
        <label htmlFor="deliveryAddress">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            id="deliveryAddress"
            type="text"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="deliveryNumber">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            id="deliveryNumber"
            onChange={ handleChange }
          />
        </label>
        { error && (
          <div>
            *
            {error}
          </div>
        )}
        <br />
        <br />
        <button
          data-testid="customer_checkout__button-submit-order"
          type="submit"
          onClick={ handleSubmit }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

export default CheckoutClient;
