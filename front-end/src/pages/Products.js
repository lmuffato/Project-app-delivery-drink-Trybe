import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
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
        <NavBar />
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
