import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { usePrice } from '../../context/productsProvider';
import CheckoutForm from '../../components/CheckoutForm';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';
import styles from './styles.module.css';

export default function CheckoutPage() {
  const { putItem, totalPrice } = usePrice();

  useEffect(() => {
    console.log('Itens adicionados');
    console.log(putItem);
    console.log('Tudo ok ?');
  }, []);

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
                    `cutomer_checkout__element-order-table-quantity-${i}`
                  }
                >
                  { item.quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${i}`
                  }
                >
                  { item.price }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${i}`
                  }
                >
                  { replaceDotToComma(item.price * item.quantity) }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${i}`
                  }
                >
                  <button
                    type="button"
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
          { replaceDotToComma(totalPrice) }
        </div>
      </div>

      <div>
        <h2> Detalhes e Endereço para Entrega</h2>
        <CheckoutForm />
      </div>
    </div>
  );
}
