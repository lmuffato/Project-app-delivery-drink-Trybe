import React, { useContext, useState, useEffect } from 'react';
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
  const [quantity, setQuantity] = useState(0);
  const { setProductCartQuantity } = useContext(ContextProducts);

  useEffect(() => {
    setProductCartQuantity(id, +(quantity));
  }, [quantity]);

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
          onClick={ () => setQuantity(quantity - 1) }
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
          onChange={ (e) => setQuantity(+(e.target.value)) }
          value={ quantity.toString() }
        />
        <Button
          size="medium"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setQuantity(quantity + 1) }
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
