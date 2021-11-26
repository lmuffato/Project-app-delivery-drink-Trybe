import React from 'react';
import Header from '../../components/Header';
import { usePrice } from '../../context/productsProvider';
import CheckoutForm from '../../components/CheckoutForm';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';
import styles from './styles.module.css';

export default function CheckoutPage() {
  const { putItem, setPutItem, totalPrice, setTotalPrice } = usePrice();

  const buttonHandle = (index) => {
    const items = [...putItem];
    setTotalPrice((totalPrice - (items[index].price * items[index].quantity)).toFixed(2));
    items.splice(index, 1);
    setPutItem(items);
  };

  return (
    <div>
      <Header />
      <div className={ styles.container }>
        <h2 className={ styles.flexstart }>Finalizar Pedido</h2>
        <table className={ styles.customTable }>
          <thead>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </thead>
          <tbody>
            { putItem.map((item, i) => (
              <tr
                key={ item.id }
              >
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${i}`
                  }
                >
                  { i + 1 }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${i}`
                  }
                >
                  { item.name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${i}`
                  }
                >
                  { item.quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${i}`
                  }
                >
                  { replaceDotToComma(item.price) }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${i}`
                  }
                >
                  { replaceDotToComma((item.price * item.quantity).toFixed(2)) }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${i}`
                  }
                >
                  <button
                    type="button"
                    onClick={ () => buttonHandle(i) }
                    data-testid={
                      `customer_checkout__element-order-table-remove-${i}`
                    }
                  >
                    Remover
                  </button>
                </td>

              </tr>
            )) }
          </tbody>
        </table>
        <div className={ styles.flexend }>
          Total: R$
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            { replaceDotToComma(totalPrice) }
          </span>
        </div>
      </div>

      <div className={ styles.container }>
        <h2 className={ styles.flexstart }> Detalhes e Endereço para Entrega</h2>
        <CheckoutForm />
      </div>
    </div>
  );
}
