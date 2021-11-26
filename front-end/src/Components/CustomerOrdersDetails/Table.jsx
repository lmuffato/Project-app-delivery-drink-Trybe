import React, { useContext } from 'react';
import NewOrderContext from '../../context/NewOrderContext';

const testId41 = 'customer_order_details__element-order-table-item-number-';
const testId42 = 'customer_order_details__element-order-table-name-';
const testId43 = 'customer_order_details__element-order-table-quantity-';
const testId44 = 'customer_order_details__element-order-table-unit-price-'; // Verificar
const testId45 = 'customer_order_details__element-order-table-sub-total-'; // Verificar

export default function Table() {
  const { orderItensList } = useContext(NewOrderContext);

  const roundValue = (value) => {
    const newValue = Math.round((value) * 100) / 100;
    return newValue.toFixed(2);
  };

  const convertValueToBrlShape = (value) => {
    const stringValue = `R$ ${value}`;
    const brlValue = stringValue.replace('.', ',');
    return brlValue;
  };

  const renderColumnsName = () => (
    <tr>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Sub-total</th>
    </tr>
  );

  const renderRowsTable = () => {
    if (orderItensList.lengh !== 0 || orderItensList !== undefined) {
      return (
        orderItensList.map((ele, index) => (
          <tr key={ index }>
            <td data-testid={ `${testId41}${index}` }>{index + 1}</td>
            <td data-testid={ `${testId42}${index}` }>{ele.name}</td>
            <td data-testid={ `${testId43}${index}` }>{ele.quantity}</td>
            <td
              data-testid={ `${testId44}${index}` }
            >
              { convertValueToBrlShape(roundValue(ele.price)) }
            </td>
            <td
              data-testid={ `${testId45}${index}` }
            >
              { convertValueToBrlShape(roundValue(ele.price * ele.quantity)) }
            </td>
          </tr>
        ))
      );
    }
  };

  return (
    <div>
      <table>
        <thead>
          { renderColumnsName() }
        </thead>
        <tbody>
          { renderRowsTable() }
        </tbody>
      </table>
    </div>
  );
}
