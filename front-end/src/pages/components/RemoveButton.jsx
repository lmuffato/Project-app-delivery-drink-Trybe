import React from 'react';
import PropTypes from 'prop-types';

export default function RemoveButton({ callback, index }) {
  const handleClick = () => {
    callback(index);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
      >
        Remover
      </button>
    </div>
  );
}

RemoveButton.propTypes = {
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};
