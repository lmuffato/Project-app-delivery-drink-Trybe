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
      setIsLoading(true);
      const productsArray = await api.getProducts();
      setProducts(productsArray);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  if (isLoading || !products) return <h1>Loading..</h1>;
  if (products) {
    return (
      <section className="productsPage">
        <MenuCostumer />
        { console.log(products) }
        <div className="productsContainer">
          {products.map(({ id, name, price, url }) => (
            <Card
              id={ id }
              key={ id }
              name={ name }
              price={ price }
              url={ url }
            />
          ))}
        </div>
      </section>
    );
  }
};

export default ProductsPage;
