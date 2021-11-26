import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
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

  return (
    <section>
      <nav>
        <div>PRODUTOS</div>
        <div>MEUS PEDIDOS</div>
        <div> NOME</div>
        <div>SAIR</div>
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
