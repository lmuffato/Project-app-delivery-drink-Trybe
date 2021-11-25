import React, { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/Products/ProductsContext';

export default function CheckoutTable() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const { setTotalPrice } = useContext(ProductsContext);
  const { BRL } = useContext(ProductsContext);
  const cart = JSON.parse(localStorage.getItem('carrinho'));
  useEffect(() => {
    (() => {
      setShoppingCart(cart);
    })();
  }, [cart]);
  const removeItem = (index) => {
    // const cart = shoppingCart;
    cart.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(cart));
    setShoppingCart(cart);
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.count * Number(item.price);
      return totalPrice;
    });
    setTotalPrice(totalPrice);
  };
  return (
    <table className="table-checkout">
      <thead>
        <tr>
          <th className="th-item">Item</th>
          <th>Descrição</th>
          <th className="th-quantity">Quantidade</th>
          <th className="th-unit-price">Valor Unitário</th>
          <th className="th-sub-total">Sub-total</th>
          <th className="th-remove">Remover Item</th>
        </tr>
      </thead>
      <tbody>
        { shoppingCart.map((prod, index) => (
          <tr key={ index + 1 }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number--${index}`
              }
              className="td-item"
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-name-${index}`
              }
              className="td-description"
            >
              {prod.name}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
              className="td-quantity"
            >
              {prod.count}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
              className="td-unit-price"
            >
              { BRL(parseFloat(prod.price)) }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
              className="td-subtotal"
            >
              { BRL(parseFloat(prod.price * prod.count)) }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-remove-${index}`
              }
              className="td-remove bg-danger"
            >
              <button
                type="button"
                onClick={ () => removeItem(index) }
              >
                Remover
              </button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
