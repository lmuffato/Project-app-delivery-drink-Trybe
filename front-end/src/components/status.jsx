import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Status({ status }) {
  const [testId, setTest] = useState('');
  const path = useLocation().pathname;
  useEffect(() => {
    const setTestId = () => {
      if (path.includes('seller')) {
        setTest('seller_orders__element-delivery-status');
      } else {
        setTest('costumer_orders__element-delivery-status');
      }
    };
    setTestId();
  }, [path]);

  return (
    <div data-testid={ testId }>
      <h1>{ status }</h1>
    </div>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
