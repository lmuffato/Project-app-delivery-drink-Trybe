import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import * as request from '../services/requests';
import NavBar from '../components/NavBar';

function Products() {
  const [products, setProducts] = useState([]);

  const dataUser = JSON.parse(localStorage.getItem('dataUser'));

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await request.getPruducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <section>
      <NavBar dataUser={ dataUser } />
      <div>
        { products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        )) }
      </div>
    </section>
  );
}

export default Products;
