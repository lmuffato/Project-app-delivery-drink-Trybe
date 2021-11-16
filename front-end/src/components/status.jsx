import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Status({ status }) {
  const [testId, setTest] = useState('');

  useEffect(() => {
    const setTestId = () => {
      const path = window.location.pathname;
      if (path.includes('seller')) {
        setTest('seller_orders__element-delivery-status');
      } else {
        setTest('costumer_orders__element-delivery-status');
      }
    };
    setTestId();
  }, []);

  return (
    <div data-testid={ testId }>
      <h1>{ status }</h1>
    </div>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
