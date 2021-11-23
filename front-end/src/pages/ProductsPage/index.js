import React, { useContext, useEffect } from 'react';
import Card from '../../components/Card';
import MenuCostumer from '../../components/MenuCustomer';
import ContextProduct from '../../provider/product/ContextProduct';
import api from '../../services/api';
import './style.css';

const ProductsPage = () => {
  const { products, setProducts } = useContext(ContextProduct);
  const [totalPriceCart] = React.useState(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (cart && cart.length !== 0) {
      return cart.reduce((acc, elem) => acc + elem.quantity * elem.price);
    }
    return 0;
  });

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

  // const setQuantity = () => {
  //   const cart = JSON.parse(localStorage.getItem('carrinho'));
  //   if (cart) {
  //     setTotalPriceCart(cart.reduce((acc, elem) => acc + elem.quantity * elem.price));
  //     return (<div>{ totalPriceCart }</div>);
  //   }
  // };

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
        <p>{ totalPriceCart }</p>
      </section>
    );
  }
};

export default ProductsPage;
