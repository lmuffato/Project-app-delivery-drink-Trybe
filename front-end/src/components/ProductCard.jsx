import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  ButtonGroup,
  TextField,
} from '@mui/material';
import ContextProducts from '../context/ContextProducts';

function ProductCard(props) {
  const { id, name, price, url_image: image } = props;
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    setProductQuantity,
    cartProducts,
  } = useContext(ContextProducts);

  const findQuantityInCart = (productId) => {
    const foundProduct = cartProducts
      .find((product) => product.id === productId);

    if (!foundProduct) return 0;

    return foundProduct.quantity;
  };

  return (
    <Card sx={ { maxWidth: 275 } }>
      <CardContent>
        <Typography
          sx={ { fontSize: 14 } }
          color="text.secondary"
          data-testid={ `customer_products__element-card-price-${id}` }
          gutterBottom
        >
          R$
          { price }
        </Typography>
        <CardMedia
          component="img"
          height="125"
          image={ image }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <Typography
          variant="body2"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </Typography>
      </CardContent>
      <ButtonGroup>
        <Button
          size="medium"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => decreaseProductQuantity(id) }
        >
          -
        </Button>
        <TextField
          sx={ {
            maxWidth: 50,
          } }
          inputProps={ {
            'data-testid': `customer_products__input-card-quantity-${id}`,
          } }
          onBlur={ (e) => setProductQuantity(id, +(e.target.value)) }
          value={ findQuantityInCart(id) }
        />
        <Button
          size="medium"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => increaseProductQuantity(id) }
        >
          +
        </Button>
      </ButtonGroup>
    </Card>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url_image: PropTypes.string.isRequired,
};

export default ProductCard;
