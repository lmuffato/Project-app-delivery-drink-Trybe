import React, { useContext } from 'react';
import NewOrderContext from '../../context/NewOrderContext';

const testId22 = 'customer_checkout__element-order-table-item-number-';
const testId23 = 'customer_checkout__element-order-table-name-';
const testId24 = 'customer_checkout__element-order-table-quantity-';
const testId25 = 'customer_checkout__element-order-table-unit-price-';
const testId26 = 'customer_checkout__element-order-table-sub-total-';
const testId27 = 'customer_checkout__element-order-table-remove-';

export default function Table() {
  const { itensList, setItensList } = useContext(NewOrderContext);

  const roundValue = (value) => {
    const newValue = Math.round((value) * 100) / 100;
    return newValue.toFixed(2);
  };

  const convertValueToBrlShape = (value) => {
    const stringValue = `R$ ${value}`;
    const brlValue = stringValue.replace('.', ',');
    return brlValue;
  };

  const deleteItenInTheList = (itemId) => {
    const newList = itensList.filter((ele) => ele.productId !== Number(itemId));
    setItensList(newList);
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
    if (itensList.lengh !== 0 || itensList !== undefined) {
      return (
        itensList.map((ele, index) => (
          <tr key={ index }>
            <td data-testid={ `${testId22}${index}` }>{index + 1}</td>
            <td data-testid={ `${testId23}${index}` }>{ele.name}</td>
            <td data-testid={ `${testId24}${index}` }>{ele.quantity}</td>
            <td
              data-testid={ `${testId25}${index}` }
            >
              { convertValueToBrlShape(roundValue(ele.price)) }
            </td>
            <td
              data-testid={ `${testId26}${index}` }
            >
              { convertValueToBrlShape(roundValue(ele.price * ele.quantity)) }
            </td>
            <td>
              <button
                type="button"
                data-testid={ `${testId27}${index}` }
                className={ `${testId27}` }
                id={ ele.productId }
                onClick={ (event) => { deleteItenInTheList(event.target.id); } }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))
      );
    }
  };

  return (
    <div>
      <h3>Finalizar Pedido</h3>
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
