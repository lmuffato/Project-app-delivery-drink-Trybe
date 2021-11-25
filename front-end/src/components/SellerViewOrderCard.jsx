import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import converDateFormat from '../utils/convertDateFormat';

function SellerViewOrderCard(props) {
  const {
    id,
    status,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
  } = props;

  const testIdPrefix = 'seller_orders__';
  const history = useHistory();

  const statusFieldBackgroundColor = () => {
    switch (status.toLowerCase()) {
    case 'pendente':
      return '#CCB800BF';
    case 'preparando':
      return '#00CC9BBF';
    case 'entregue':
      return '#66CC00BF';
    default:
      return '#FFF';
    }
  };

  return (
    <Box
      onClick={ () => history.push(`/seller/orders/${id}`) }
      sx={ {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e5e5e5',
        padding: '5px',
        gap: '5px',
      } }
    >
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFF',
          borderRadius: '5px',
          padding: '5px',
        } }
      >
        <p>Pedido</p>
        <Button
          data-testid={ `${testIdPrefix}element-order-id-${id}` }
        >
          { id }
        </Button>
      </Box>
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        } }
      >
        <Box
          sx={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          } }
        >
          <Typography
            sx={ {
              backgroundColor: statusFieldBackgroundColor(),
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: '17px',
              width: '50%',
              height: '100%',
              borderRadius: '2px',
              padding: '0 10px',
              display: 'flex',
              alignItems: 'center',
            } }
            data-testid={ `${testIdPrefix}element-delivery-status-${id}` }
          >
            { status }
          </Typography>
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              fontWeight: 'bold',
            } }
          >
            <Typography
              data-testid={ `${testIdPrefix}element-order-date-${id}` }
              sx={ {
                fontWeight: 'inherit',
                width: '100%',
                backgroundColor: '#F2FFFC',
                borderRadius: '2px',
                textAlign: 'center',
              } }
            >
              { converDateFormat(saleDate) }
            </Typography>

            <Typography
              data-testid={ `${testIdPrefix}element-card-price-${id}` }
              sx={ {
                fontWeight: 'inherit',
                width: '100%',
                backgroundColor: '#F2FFFC',
                borderRadius: '2px',
                textAlign: 'center',
              } }
            >
              { totalPrice.toString().replace('.', ',') }
            </Typography>
          </Box>
        </Box>
        <Typography
          data-testid={ `${testIdPrefix}element-card-address-${id}` }
          sx={ { fontSize: '12px', alignSelf: 'flex-end' } }
        >
          { `${deliveryAddress}, ${deliveryNumber.toString()}` }
        </Typography>
      </Box>
    </Box>
  );
}

SellerViewOrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
};

export default SellerViewOrderCard;
