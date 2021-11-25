import React, {
  useEffect,
  // useState,
  useContext,
} from 'react';
import TableHeader from './TableHeader';
import NewOrderContext from '../../context/NewOrderContext';

const testIdNumber = 'customer_checkout__element-order-table-item-number-';
const testIdName = 'customer_checkout__element-order-table-name-';
const testIdQuantity = 'customer_checkout__element-order-table-quantity-';
const testIdUnitPrice = 'customer_checkout__element-order-table-unit-price-';
const testIdSubTotal = 'customer_checkout__element-order-table-sub-total-';
// const testIdRemove = 'customer_checkout__element-order-table-remove-';
const testIdTotal = 'customer_checkout__element-order-total-price';

export default function Table() {
  // const [itensList, setItensList] = useState([]);
  const { orderItensList } = useContext(NewOrderContext);
  const { totalPrice, setTotalPrice } = useContext(NewOrderContext);
  // const [isLoading, setIsLoading] = useState(false);

  const roundValue = ((value) => {
    const newValue = Math.round((value) * 100) / 100;
    return newValue.toFixed(2);
  });

  const totalSum = () => {
    const sum = orderItensList.reduce((acc, ele) => {
      acc += ele.quantity * ele.price;
      return acc;
    }, 0);
    setTotalPrice(roundValue(sum));
    return sum;
  };

  const convertValueToBrlShape = (value) => {
    const stringValue = `R$ ${value}`;
    const brlValue = stringValue.replace('.', ',');
    return brlValue;
  };

  useEffect(() => {
    if (orderItensList.lengh !== 0) {
      totalSum();
    }
  }, [orderItensList]);

  return (
    <div>
      <h3>Finalizar Pedido</h3>
      <table>
        <TableHeader />
        <tbody>
          { orderItensList.lengh === 0
          || orderItensList === undefined ? <h3>Carregando...</h3> : (
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
              )))}
        </tbody>
      </table>
      <div
        data-testid={ `${testIdTotal}` }
      >
        { `Total: ${convertValueToBrlShape(totalPrice)}`}
      </div>
    </div>
  );
}
