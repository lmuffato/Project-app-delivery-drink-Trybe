import React, { useContext } from 'react';
import NewOrderContext from '../../context/NewOrderContext';

const testIdNumber = 'customer_checkout__element-order-table-item-number-';
const testIdName = 'customer_checkout__element-order-table-name-';
const testIdQuantity = 'customer_checkout__element-order-table-quantity-';
const testIdUnitPrice = 'customer_checkout__element-order-table-unit-price-';
const testIdSubTotal = 'customer_checkout__element-order-table-sub-total-';

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
            <td data-testid={ `${testIdNumber}${index}` }>{index + 1}</td>
            <td data-testid={ `${testIdName}${index}` }>{ele.name}</td>
            <td data-testid={ `${testIdQuantity}${index}` }>{ele.quantity}</td>
            <td
              data-testid={ `${testIdUnitPrice}${index}` }
            >
              { convertValueToBrlShape(roundValue(ele.price)) }
            </td>
            <td
              data-testid={ `${testIdSubTotal}${index}` }
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
n