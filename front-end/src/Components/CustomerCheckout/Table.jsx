import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';

// Array de test
const arrayDeTest = [
  { productId: 1, name: 'cerveja', quantity: 10, price: 8 },
  { productId: 2, name: 'cachaça', quantity: 2, price: 10 },
  { productId: 3, name: 'vinho', quantity: 1, price: 60 },
  { productId: 4, name: 'whisk', quantity: 5, price: 80 },
];

const testIdNumber = 'customer_checkout__element-order-table-item-number-';
const testIdName = 'customer_checkout__element-order-table-name-';
const testIdQuantity = 'cutomer_checkout__element-order-table-quantity-';
const testIdUnitPrice = 'customer_checkout__element-order-table-unit-price-';
const testIdSubTotal = 'customer_checkout__element-order-table-sub-total-';
const testIdRemove = 'customer_checkout__element-order-table-remove-';
const testIdTotal = 'customer_checkout__element-order-total-price';

export default function Table() {
  const [itensList, setItensList] = useState([]);

  useEffect(() => {
    setItensList(arrayDeTest);
    console.log(itensList);
  }, []);

  const deleteItem = (itemId) => {
    const newList = itensList.filter((ele) => ele.productId !== Number(itemId));
    setItensList(newList);
  };

  const totalSum = () => {
    const sum = itensList.reduce((acc, ele) => {
      acc += ele.quantity * ele.price;
      return acc;
    }, 0);
    return sum;
  };

  return (
    <div>
      <h3>Finalizar Pedido</h3>
      <table>
        <TableHeader />
        <tbody>
          {
            itensList.map((ele, index) => (
              <tr key={ index }>
                <td data-testid={ `${testIdNumber}${index}` }>{index}</td>
                <td data-testid={ `${testIdName}${index}` }>{ele.name}</td>
                <td data-testid={ `${testIdQuantity}${index}` }>{ele.quantity}</td>
                <td data-testid={ `${testIdUnitPrice}${index}` }>{ele.price}</td>
                <td
                  data-testid={ `${testIdSubTotal}${index}` }
                >
                  {ele.price * ele.quantity}
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={ `${testIdRemove}${index}` }
                    className={ `${testIdRemove}` }
                    id={ ele.productId }
                    onClick={ (event) => { deleteItem(event.target.id); } }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div data-testid={ `${testIdTotal}` }>{`Total: R$ ${totalSum()}`}</div>
    </div>
  );
}
