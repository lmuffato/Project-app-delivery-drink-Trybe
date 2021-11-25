import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
} from '@mui/material';

function ProductInSaleCard(props) {
  const {
    id,
    name,
    price,
    SaleProduct: { quantity },
    testIdsPrefix,
  } = props;

  const calcSubtotal = () => (price * +(quantity)).toFixed(2);

  return (
    <Box
      sx={ {
        backgroundColor: '#E5E5E5',
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
      } }
    >
      <Typography
        sx={ {
          color: '#000',
          backgroundColor: '#2FC18C',
          width: '5%',
          textAlign: 'center',
        } }
        data-testid={ `${testIdsPrefix}element-order-table-item-number-${id}` }
      >
        { id }
      </Typography>
      <Typography
        sx={ { color: '#000', width: '65%', marginLeft: '5px' } }
        data-testid={ `${testIdsPrefix}element-order-table-name-${id}` }
      >
        { name }
      </Typography>
      <Typography
        sx={ {
          color: '#FFF',
          backgroundColor: '#036B52',
          width: '10%',
          textAlign: 'center',
        } }
        data-testid={ `${testIdsPrefix}element-order-table-quantity-${id}` }
      >
        { quantity }
      </Typography>
      <Typography
        sx={ {
          color: '#FFF',
          backgroundColor: '#421981',
          width: '10%',
          textAlign: 'center',
        } }
        data-testid={ `${testIdsPrefix}element-order-table-sub-total-${id}` }
      >
        { price.toString().replace('.', ',') }
      </Typography>
      <Typography
        sx={ {
          color: '#FFF',
          backgroundColor: '#056CF9',
          width: '10%',
          textAlign: 'center',
        } }
        data-testid={ `${testIdsPrefix}element-order-total-price-${id}` }
      >
        { calcSubtotal().toString().replace('.', ',') }
      </Typography>
    </Box>
  );
}

ProductInSaleCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  testIdsPrefix: PropTypes.string.isRequired,
  SaleProduct: PropTypes.shape({
    quantity: PropTypes.string.isRequired,
    saleId: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductInSaleCard;
