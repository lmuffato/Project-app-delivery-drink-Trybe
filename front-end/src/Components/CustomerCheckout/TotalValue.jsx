import React, { useEffect, useContext } from 'react';
import NewOrderContext from '../../context/NewOrderContext';

const testid28 = 'customer_checkout__element-order-total-price';

export default function StatusBar() {
  const { itensList } = useContext(NewOrderContext);
  const { totalPrice, setTotalPrice } = useContext(NewOrderContext);

  const roundValue = (value) => {
    const newValue = Math.round((value) * 100) / 100;
    return newValue.toFixed(2);
  };

  const totalSum = () => {
    const sum = itensList.reduce((acc, ele) => {
      acc += ele.quantity * ele.price;
      return acc;
    }, 0);
    setTotalPrice(roundValue(sum));
    return sum;
  };

  useEffect(() => {
    if (itensList.lengh !== 0) {
      totalSum();
    }
  }, [itensList]);

  const convertValueToBrlShape = (value) => {
    const stringValue = `R$ ${value}`;
    const brlValue = stringValue.replace('.', ',');
    return brlValue;
  };

  const renderTotalValue = () => {
    if (itensList.lengh !== 0 || itensList !== undefined) {
      return (
        <p data-testid={ `${testid28}` }>
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
