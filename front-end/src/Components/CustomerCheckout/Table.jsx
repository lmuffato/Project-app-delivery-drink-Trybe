import React, {
  useEffect,
  // useState,
  useContext,
} from 'react';
import TableHeader from './TableHeader';
import NewOrderContext from '../../context/NewOrderContext';

const testIdNumber = 'customer_checkout__element-order-table-item-number-';
const testIdName = 'customer_checkout__element-order-table-name-';
const testIdQuantity = 'cutomer_checkout__element-order-table-quantity-';
const testIdUnitPrice = 'customer_checkout__element-order-table-unit-price-';
const testIdSubTotal = 'customer_checkout__element-order-table-sub-total-';
const testIdRemove = 'customer_checkout__element-order-table-remove-';
const testIdTotal = 'customer_checkout__element-order-total-price';

export default function Table() {
  // const [itensList, setItensList] = useState([]);
  const { itensList, setItensList } = useContext(NewOrderContext);
  const { totalPrice, setTotalPrice } = useContext(NewOrderContext);
  // const { itensList, setItensList } = useContext(UserContext);

  const deleteItem = (itemId) => {
    const newList = itensList.filter((ele) => ele.productId !== Number(itemId));
    setItensList(newList);
  };

  const roundValue = (value) => Math.round((value) * 100) / 100;

  const totalSum = () => {
    const sum = itensList.reduce((acc, ele) => {
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
    totalSum();
    console.log(itensList);
  }, [itensList]);

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
                  { roundValue(ele.price * ele.quantity) }
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
      <div
        data-testid={ `${testIdTotal}` }
      >
        { `Total: ${convertValueToBrlShape(totalPrice)}`}
      </div>
    </div>
  );
}
