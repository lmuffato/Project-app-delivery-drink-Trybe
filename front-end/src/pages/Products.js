import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import * as request from '../services/requests';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await request.getPruducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  console.log(products);

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
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
    </section>
  );
}

export default Products;
