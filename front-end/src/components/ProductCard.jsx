import React, { useContext, useState, useEffect } from 'react';
import './ProductCard.css';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../contexts/CartContext';

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  function handleCart(qtt) {
    setQuantity(qtt);
    if (!cart.find((item) => item.name === product.name)) {
      setCart([...cart, { name: product.name, price: product.price, quantity: qtt }]);
    } else {
      const index = cart.findIndex((item) => item.name === product.name);
      const newCart = [...cart];
      newCart[index].quantity = qtt;
      setCart(newCart);
    }
  }

  function handleClic(e) {
    if (e.target.innerText === '-' && quantity > 0) {
      handleCart(quantity - 1);
    } else if (e.target.innerText === '+') {
      handleCart(quantity + 1);
    }
  }

  useEffect(() => {
    function handleQuantity() {
      const inicialCart = cart.find((item) => item.name === product.name);
      if (inicialCart) {
        setQuantity(inicialCart.quantity);
      }
    }
    handleQuantity();
  }, [cart, product]);

  return (
    <Card bcart="info" className="card">
      <Card.Img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        variant="top"
        src={ product.url_image }
        style={ { width: '120px', height: '120px' } }
      />
      <Card.Body>
        <p
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </p>
        <Card.Text>
          R$
          <span
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            { (product.price.replace('.', ',')) }
          </span>
        </Card.Text>
        <div className="quantityContainer">
          <Button
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            variant="primary"
            onClick={ (e) => handleClic(e) }
            size="sm"
          >
            -
          </Button>
          <input
            type="number"
            value={ quantity }
            className="quantityInput"
            onChange={ (e) => handleCart(e.target.value) }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <Button
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            variant="primary"
            onClick={ (e) => handleClic(e) }
            size="sm"
          >
            +
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default ProductCard;
