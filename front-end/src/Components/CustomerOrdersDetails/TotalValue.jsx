import React, { useEffect, useContext } from 'react';
import NewOrderContext from '../../context/NewOrderContext';

const testid46 = 'customer_order_details__element-order-total-price'; // Verificar

export default function StatusBar() {
  const { orderItensList } = useContext(NewOrderContext);
  const { totalPrice, setTotalPrice } = useContext(NewOrderContext);

  const roundValue = (value) => {
    const newValue = Math.round((value) * 100) / 100;
    return newValue.toFixed(2);
  };

  const totalSum = () => {
    const sum = orderItensList.reduce((acc, ele) => {
      acc += ele.quantity * ele.price;
      return acc;
    }, 0);
    setTotalPrice(roundValue(sum));
    return sum;
  };

  useEffect(() => {
    if (orderItensList.lengh !== 0) {
      totalSum();
    }
  }, [orderItensList]);

  const convertValueToBrlShape = (value) => {
    const stringValue = `R$ ${value}`;
    const brlValue = stringValue.replace('.', ',');
    return brlValue;
  };

  const renderTotalValue = () => {
    if (orderItensList.lengh !== 0 || orderItensList !== undefined) {
      return (
        <p data-testid={ `${testid46}` }>
          { `Total: ${convertValueToBrlShape(totalPrice)}` }
        </p>);
    }
  };

  return (
    <div>
      { renderTotalValue() }
    </div>
  );
}
