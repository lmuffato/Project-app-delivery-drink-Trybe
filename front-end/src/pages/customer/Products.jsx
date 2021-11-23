import React, { useContext, useEffect, useState } from 'react';
import { formatMoney } from 'accounting';
import { useHistory } from 'react-router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/pages/Products.module.scss';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import { cartContext } from '../../contexts/cart';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const { cartItens } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

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

  useEffect(() => {
    const total = cartItens.reduce((acc, curr) => acc + Number(curr.subTotal), 0);
    setTotalPrice(formatMoney(total, {
      symbol: '',
      decimal: ',',
    }));
  }, [cartItens]);

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
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ totalPrice === '0,00' }
        onClick={ () => history.push('/customer/checkout') }
      >
        R$
        <span data-testid="customer_products__checkout-bottom-value">
          { totalPrice }
        </span>
      </button>
    </div>
  );
}
