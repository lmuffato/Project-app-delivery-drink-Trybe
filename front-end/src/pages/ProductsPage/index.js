import React, { useContext, useEffect } from 'react';
import Card from '../../components/Card';
import MenuCostumer from '../../components/MenuCustomer';
import ContextProduct from '../../provider/product/ContextProduct';
import api from '../../services/api';
import './style.css';

const ProductsPage = () => {
  const { products, setProducts } = useContext(ContextProduct);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('Aqui');
      setIsLoading(true);
      const { token } = JSON.parse(localStorage.getItem('user'));
      const array = await api.getProducts(token);
      setProducts(array);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

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
      </section>
    );
  }
};

export default ProductsPage;
