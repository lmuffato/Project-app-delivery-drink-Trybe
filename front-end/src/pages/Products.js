import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
import * as request from '../services/requests';
import { CartContext } from '../context/cart';

function Products() {
  const { cartStorage } = useContext(CartContext);
  const [products, setProducts] = useState([]);
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
        <button type="button">
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
