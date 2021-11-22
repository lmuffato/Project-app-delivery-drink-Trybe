import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import ProductCard from '../components/ProductCard';
import ApiContext from '../context/ApiContext';
import ProductListContext from '../context/ProductListContext';

function CustomerProducts() {
  const history = useHistory();
  const { products } = useContext(ApiContext);
  const { totalPrice } = useContext(ProductListContext);

  return (
    <div>
      { products.map((product, index) => (
        <ProductCard
          key={ index }
          id={ product.id }
          price={ product.price }
          name={ product.name }
          image={ product.url_image }
        />
      )) }
      <button
        data-testid="customer_products__button-cart"
        type="button"
        disabled={ totalPrice === '0,00' }
        onClick={ () => history.push('/customer/checkout') }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          {`R$ ${totalPrice}`}
        </span>
      </button>
    </div>
  );
}

export default CustomerProducts;
