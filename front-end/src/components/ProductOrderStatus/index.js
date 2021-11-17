import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatusContainer = styled.div`
  box-sizing: border-box;
  width: ${({ full }) => (full ? '100%' : 'min-content')};
  height: ${({ full }) => (full ? '100%' : 'min-content')};
  color: ${({ theme }) => theme.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 5px 20px;
  border-radius: 6px;
  font-weight: bold;
  background-color: ${({ theme, type }) => {
    if (type === 'pending') return theme.pending;
    if (type === 'preparing') return theme.preparing;
    if (type === 'delivered') return theme.delivered;
  }};
`;

const statuses = {
  pending: 'PENDENTE',
  preparing: 'PREPARANDO',
  delivered: 'ENTREGUE',
};

function ProductOrderStatus({ status, testid, full }) {
  return (
    <StatusContainer full={ full } type={ status }>
      <span data-testid={ testid }>{statuses[status]}</span>
    </StatusContainer>
  );
}

ProductOrderStatus.propTypes = {
  status: PropTypes.oneOf(['pending', 'preparing', 'delivered']).isRequired,
  testid: PropTypes.string.isRequired,
  full: PropTypes.string,
};

ProductOrderStatus.defaultProps = {
  full: false,
};

export default ProductOrderStatus;
