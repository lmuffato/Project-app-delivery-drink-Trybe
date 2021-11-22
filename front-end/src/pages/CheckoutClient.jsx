import React, { useContext } from 'react';
import Header from '../components/header';
import Context from '../context/Context';
import Table from '../components/table';

function CheckoutClient() {
  const {
    postShoppingCart, shoppingCart, total, setDelivery, delivery } = useContext(Context);

    const [order, setOrder] = useState(shoppingCart);
    console.log(order);

  return (
    <>
      <Header client={ `${'nome'}` } />
      <div>
        <h1>Finalizar Pedido</h1>
        <table border="1">
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
            <td>Remover Item</td>
          </tr>
          { Object.keys(shoppingCart)
            .map((item) => (<Table
              props={ shoppingCart[item] }
              key={ item.id }
            />))}
        </table>

        <h1 data-testid="customer_checkout__element-order-total-price">
          Total: R$
          { total }
        </h1>
      </div>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <label htmlFor="vendedor">
          P.Vendedora responsável
          <select data-testid="customer_checkout__select-seller">
            <option>Fulano</option>
            <option>Fulano</option>
            <option>Fulano</option>
          </select>
        </label>
        <label htmlFor="endereço">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ (e) => setDelivery({ ...delivery,
              deliveryAddress: e.target.value }) }
          />
        </label>
        <label htmlFor="Número">
          Endereço
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            onChange={ (e) => setDelivery({ ...delivery,
              deliveryNumber: e.target.value }) }
          />
        </label>
        <br />
        <br />
        <button
          data-testid="customer_checkout__input-submit-order"
          type="submit"
          onClick={ () => postShoppingCart() }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

export default CheckoutClient;
