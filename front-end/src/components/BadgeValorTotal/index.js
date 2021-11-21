import React from 'react';
import PropTypes from 'prop-types';

function BadgeValorTotal({ price }) {
  return (
    <div
      style={ {
        height: '50px',
        width: '280px',
        backgroundColor: ' #036B52',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
      } }
    >
      <h1 style={ { color: 'white' } }>{`Total: R$ ${price}`}</h1>
    </div>
  );
}

BadgeValorTotal.propTypes = {
  price: PropTypes.number.isRequired,
};

export default BadgeValorTotal;
