import React from 'react';
import PropTypes from 'prop-types';

function StatusDoPedido({ label }) {
  return (
    <div
      style={ {
        height: '80px',
        width: '180px',
        backgroundColor: (label === 'ENTREGUE' && '#2FC18C')
        || (label === 'PENDENTE' && '#421981') || (label === 'PREPARANDO' && '#036B52')
        || (label === 'EM TRÂNSITO' && '#033B51'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
      } }
    >
      <p style={ { fontSize: '18px', fontWeight: 'bold' } }>{ label }</p>
    </div>
  );
}

StatusDoPedido.propTypes = {
  label: PropTypes.string.isRequired,
};

export default StatusDoPedido;
