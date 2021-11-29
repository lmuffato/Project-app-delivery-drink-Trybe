import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/header';
import Context from '../context/Context';
import Table from '../components/table';
import '../styles/checkout.css';

function CheckoutClient() {
  const { post, shoppingCart, total, get, setSellers } = useContext(Context);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [sellersArr, setSellersArr] = useState(null);
  const [sellerId, setSellerId] = useState('');
  const [delivery, setDelivery] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
  });

  useEffect(() => {
    const allSellers = async () => {
      const { data } = await get('input_sellers');
      setSellersArr(data);
      setSellers(data);
      setSellerId(data[0].id);
    };
    allSellers();
  }, []);

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
        submitCart[id] = shoppingCart[id].productQuant;
      });

      const totalConvertedToNumber = Number(total.replace(',', '.')).toFixed(2);
      const data = {
        shoppingCart: submitCart,
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
      <h1 className="title">Finalizar Pedido</h1>
      <table className="table">
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

      <h1 className="title" data-testid="customer_checkout__element-order-total-price">
        Total: R$
        { total }
      </h1>
      <div className="form">
        <h1 className="title">Detalhes e Endereço para Entrega</h1>
        <label htmlFor="vendedor">
          P.Vendedora responsável
          <select
            data-testid="customer_checkout__select-seller"
            onChange={ (e) => setSellerId(e.target.value) }
          >
            {sellersArr && sellersArr.map((seller) => (
              <option key={ seller.id } value={ seller.id }>{seller.name}</option>
            ))}
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
