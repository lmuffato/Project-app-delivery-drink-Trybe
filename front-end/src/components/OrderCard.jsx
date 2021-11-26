import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  Typography,
} from '@mui/material';
import StatusCard from './StatusCard';

import convertDateFormat from '../utils/convertDateFormat';

function OrderCard(props) {
  const { id, saleDate, status, totalPrice } = props;
  const contentText = (content, testeid = '') => (
    <Typography
      sx={ { fontSize: 14 } }
      color="text.secondary"
      data-testid={ testeid }
      variant="h4"
    >
      {content}
    </Typography>
  );
  const rightBox = (content, testid = '') => (
    <Grid item xs={ 5 }>
      {contentText(content, testid)}
    </Grid>
  );
  const charQuantity = 4;
  const orderNumberBox = (
    <Grid container direction="column" alignItems="center" justifyContent="space-between">
      <Grid item xs={ 5 }>
        {contentText('Pedido')}
      </Grid>
      <Grid item xs={ 5 } data-testid={ `customer_orders__element-order-id-${id}` }>
        {contentText(id.toString().padStart(charQuantity, '0'))}
      </Grid>
    </Grid>
  );
  const dateTestid = `customer_orders__element-order-date-${id}`;
  const priceTestid = `customer_orders__element-card-price-${id}`;
  const statusTestid = `customer_orders__element-delivery-status-${id}`;
  return (
    <Card sx={ { maxWidth: 350 } }>
      <Grid container direction="row" alignItems="center" justifyContent="stretch">
        <Grid
          item
          xd={ 2 }
          sx={ { height: '100%' } }
        >
          {orderNumberBox}
        </Grid>
        <Grid item xs={ 3 }>
          <Grid container direction="row">
            <StatusCard initialStatus={ status } id={ id } testid={ statusTestid } />
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-around"
            >
              {rightBox(convertDateFormat(saleDate), dateTestid)}
              {rightBox(`R$ ${totalPrice.replace('.', ',')}`, priceTestid)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderCard;
