import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import CheckoutCard from '../components/CheckoutCard';
import CustomerAddress from '../components/CustomerAddress';
import ApiContext from '../context/ApiContext';
import UserContext from '../context/UserContext';
import { createSale } from '../services/apis';

function Checkout() {
  const history = useHistory();

  const { setAtt, att } = useContext(ApiContext);
  const { sellerId } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [totalCheckout, setTotalCheckout] = useState(0);
  const colunas = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-Total',
    'Remover Item',
  ];

  useEffect(() => {
    setTotalCheckout(products
      .reduce((totalP, product) => totalP + product.total, 0));
  });

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('carrinho')));
  }, []);

  const removeProduct = (name) => {
    const filteredProducts = products.filter((product) => product.name !== name);
    setProducts(filteredProducts);
    localStorage.setItem('carrinho', JSON.stringify(filteredProducts));
  };

  const checkout = async () => {
    try {
      const object = {
        totalPrice: totalCheckout,
        deliveryAddress: JSON.parse(localStorage.getItem('address')).address,
        deliveryNumber: JSON.parse(localStorage.getItem('address')).number,
        status: 'Pendente',
        products,
        token: JSON.parse(localStorage.getItem('user')).token,
        sellerId,
      };
      const getSale = await createSale(object);
      setAtt(!att);
      history.push(`/customer/orders/${getSale.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      Finalizar Pedido
      <div>
        <table>
          <thead>
            <tr>
              { colunas.map((coluna, index) => (
                <th key={ index }>
                  { coluna }
                </th>
              )) }
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <CheckoutCard
                key={ index }
                index={ index }
                name={ product.name }
                qty={ product.quantity }
                price={ product.price }
                total={ product.total }
                onChange={ () => removeProduct(product.name) }
              />
            ))}
          </tbody>
        </table>
        <div>
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            { `Total R$ ${totalCheckout.toFixed(2).replace('.', ',')}` }
          </span>
        </div>
      </div>
      <CustomerAddress
        checkout={ () => checkout() }
      />
    </>
  );
}

export default Checkout;
