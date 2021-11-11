import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card border="info" style={ { width: '18rem' } }>
      <Card.Img variant="top" src={ product.url_image } />
      <Card.Body>
        <Card.Title>{ product.name }</Card.Title>
        <Card.Text>
          Some quick example
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductCard;
