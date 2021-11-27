import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
import * as request from '../services/requests';
import { CartContext } from '../context/cart';

function Products() {
  const { cartStorage = {} } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [toCheckout, setToCheckout] = useState(false);
  const [totalCart, setTotalCart] = useState('0.00');

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await request.getPruducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (cartStorage) {
      let value = Object.values(cartStorage)
        .map((item) => item.subTotal)
        .reduce((acc, item) => acc + Number(item), 0);

      value = parseFloat(value).toFixed(2).replace('.', ',');

      setTotalCart(value);
    }
  }, [cartStorage]);

  const dataUser = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    if (cartStorage) {
      setToCheckout(true);
    }
  };

  if (toCheckout) return <Redirect to="/customer/checkout" />;

  return (
    <section>
      <nav>
        <NavBar dataUser={ dataUser } />
      </nav>
      <div>
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            cartStorage={ cartStorage }
          />
        ))}
        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={
            cartStorage ? !Object.keys(cartStorage).length : !cartStorage
          }
          onClick={ handleClick }
        >
          R$
          <span data-testid="customer_products__checkout-bottom-value">
            {totalCart}
          </span>
        </button>
      </div>
    </section>
  );
}

export default Products;
