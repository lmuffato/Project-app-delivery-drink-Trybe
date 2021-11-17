import React, { useContext, useEffect } from 'react';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import RemoveButton from './RemoveButton';

export default function ProductsList() {
  const { products, setProducts } = useContext(ContextDeliveryApp);
  const productsCart = products.filter((product) => product.quantity > 0);

  const subTotalCalc = (prod) => {
    const { quantity, price } = prod;
    const subtotal = quantity * parseFloat(price, 2);
    const res = subtotal.toFixed(2).toString().replace(/\./, ',');
    return res;
  };

  const totalPrice = () => {
    const price = productsCart
      .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);
    return price.toFixed(2).toString().replace(/\./, ',');
  };

  const handleCallbackRemoveItem = (index) => {
    const productNameToDelete = productsCart[index].name;
    const updateProducts = products.map((product) => {
      if (product.name === productNameToDelete) {
        product.quantity = 0;
      }
      return product;
    });
    setProducts(updateProducts);
    delete productsCart[index];
  };

  useEffect(() => {

  }, [productsCart]);

  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { productsCart
            .map((product, index) => (
              <tr key={ product.id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { product.name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { product.quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { product.price.toFixed(2).toString().replace(/\./, ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { subTotalCalc(product).toFixed(2).toString().replace(/\./, ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  <RemoveButton callback={ handleCallbackRemoveItem } index={ index } />
                </td>
              </tr>))}
        </tbody>
      </table>
      <h4 data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${totalPrice().toFixed(2).toString().replace(/\./, ',')}`}
      </h4>
    </div>
  );
}
