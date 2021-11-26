import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
import * as request from '../services/requests';

function Products() {
  const [products, setProducts] = useState([]);
  const [cartStorage, setCartStorage] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await request.getPruducts();
      setProducts(data);
    };

    getProducts();

    const storage = JSON.parse(localStorage.getItem('carrinho'));
    if (storage) {
      setCartStorage(storage);
    }
  }, []);

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
      </div>
    </section>
  );
}

export default Products;
