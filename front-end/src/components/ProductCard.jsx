import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

function ProductCard(props) {
  const { id, name, price, url_image: image } = props;

  return (
    <Card sx={ { maxWidth: 275 } }>
      <CardContent>
        <Typography
          sx={ { fontSize: 14 } }
          color="text.secondary"
          data-testid={ `customer_products__element-card-price-${id}` }
          gutterBottom
        >
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
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
