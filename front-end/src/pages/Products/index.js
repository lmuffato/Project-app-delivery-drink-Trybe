import React, { useContext, useEffect } from 'react';
import api from '../../services/api';

import ContextProduct from '../../provider/Product/ContextProduct';
import NavBar from '../../components/NavBar';

function ProductsPage() {
  const { products, setProducts } = useContext(ContextProduct);

  const fetchProducts = async () => {
    const productsArray = await api.getProducts();

    setProducts(productsArray);
  };

  useEffect(() => {
    fetchProducts();
  });

  const createProducts = () => (
    products.map((product) => {
      console.log('Entrei aqui');
      return (
        <li key={ product.id }>
          {product.name}
          <img alt={ product.name } src={ product.url_image } />
        </li>
      );
    })
  );

  return (
    <>
      <NavBar />
      <h1>Página de Produtos</h1>
      <ul className="tasks-list">
        { products.length === 0 ? null : createProducts() }
      </ul>
    </>
  );
}

export default ProductsPage;
