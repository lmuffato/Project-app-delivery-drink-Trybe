import React, { useContext, useEffect } from 'react';
import Card from '../../components/Card';
import MenuCostumer from '../../components/MenuCustomer';
import ContextProduct from '../../provider/product/ContextProduct';
import api from '../../services/api';
import './style.css';

const ProductsPage = () => {
  const { products, setProducts } = useContext(ContextProduct);
  const [isLoading, setIsLoading] = React.useState(false);

  console.log(products);
  // console.log(isLoading);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const array = await api.getProducts();
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
