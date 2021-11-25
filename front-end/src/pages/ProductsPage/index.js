import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Card from '../../components/Card';
import MenuCostumer from '../../components/MenuCustomer';
import { useCart } from '../../hooks/useCart';
import ContextProduct from '../../provider/product/ContextProduct';
import api from '../../services/api';
import './style.css';

const ProductsPage = () => {
  const history = useHistory();
  const { products, setProducts } = useContext(ContextProduct);
  const { totalValue } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { token } = JSON.parse(localStorage.getItem('user'));
      const array = await api.getProducts(token);
      setProducts(array);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const handleClickCart = () => history.push('/customer/checkout');

  if (isLoading || !products) return <h1>Loading..</h1>;
  if (products) {
    return (
      <section className="productsPage">
        <MenuCostumer />
        <div className="productsContainer">
          {products.map((product) => (
            <Card
              id={ product.id }
              key={ product.id }
              name={ product.name }
              price={ product.price }
              url={ product.url_image }
            />
          ))}
        </div>
        {totalValue > 0 && (
          <button
            type="button"
            className="cartButton"
            onClick={ handleClickCart }
          >
            Ver carrinho:
            R$
            <span
              data-testid="customer_products__checkout-bottom-value"
            >
              {String(totalValue.toFixed(2)).replace('.', ',')}
            </span>
          </button>
        )}
      </section>
    );
  }
};

export default ProductsPage;
