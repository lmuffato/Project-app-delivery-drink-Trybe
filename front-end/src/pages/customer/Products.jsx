import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/pages/Products.module.scss';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const response = await api.get('/products', {
        headers: {
          authorization: user.token,
        },
      });
      setProducts(await response.data);
    })();
  }, [user]);

  return (
    <div className={ styles.productsGrid }>
      { products.map((product, index) => (
        <ProductCard
          key={ product.id }
          index={ index + 1 }
          id={ product.id }
          title={ product.name }
          image={ product.url_image }
          price={ product.price }
        />
      )) }
    </div>
  );
}
