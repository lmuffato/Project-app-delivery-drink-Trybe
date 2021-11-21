import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import NewOrderContext from '../../context/NewOrderContext';
import { getAllUsersSallers } from '../../services/endpointsAPI';

const selectSeller = 'customer_checkout__select-seller';
const inputAddress = 'ustomer_checkout__input-address';
const inputAddressNumber = 'customer_checkout__input-addressNumber';
const buttonSubmitOrder = 'customer_checkout__button-submit-order';

export default function DeliveryDetails() {
  const { sellersList, setSellersList } = useContext(NewOrderContext);
  const { sellerId, setSellerId } = useContext(NewOrderContext);
  const { deliveryAddress, setDeliveryAddress } = useContext(NewOrderContext);
  const { addressNumber, setAddressNumber } = useContext(NewOrderContext);
  const [isLoading, setIsLoading] = useState(false);
  // const [sale, setSale] = useState(false)
  // saleObj = { userId, totalPrice, deliveryAddress, deliveryNumber, status }

  const getSellersList = async () => {
    const arr = await getAllUsersSallers();
    setSellersList(arr);
    setSellerId(arr[0].id);
  };

  useEffect(() => {
    setIsLoading(true);
    getSellersList();
    setIsLoading(false);
  }, []);

  const renderSellersList = () => {
    if (isLoading === true) { return null; }
    const list = sellersList.map((ele, index) => (
      <option key={ index } value={ `${ele.id}` }>{ele.name}</option>));
    return list;
  };

  useEffect(() => {
    console.log(sellerId);
  }, [sellerId]);

  return (
    <div>
      <span>
        <h3>Detalhes e Endereço para Entrega</h3>
        <label htmlFor={ `${selectSeller}` }>
          <p>P. Vendedora Responsável</p>
          <select
            id={ `${selectSeller}` }
            className={ `${selectSeller}` }
            data-testid={ `${selectSeller}` }
            name="SellersList"
            value={ sellerId.id }
            onChange={ (event) => {
              setSellerId(event.target.value);
            } }
          >
            { renderSellersList() }
          </select>
        </label>
      </span>
      <span>
        <label htmlFor={ `${inputAddress}` }>
          <p>Endereço</p>
          <input
            data-testid={ `${inputAddress}` }
            type="text"
            className={ `${inputAddress}` }
            id={ `${inputAddress}` }
            placeholder="Avenida Principa, Centro, Vitória"
            onChange={ (e) => {
              setDeliveryAddress(e.target.value); console.log(deliveryAddress);
            } }
            required
          />
        </label>
      </span>
      <span>
        <label htmlFor={ `${inputAddressNumber}` }>
          <p>Número</p>
          <input
            data-testid={ `${inputAddressNumber}` }
            type="text"
            className={ `${inputAddressNumber}` }
            id={ `${inputAddressNumber}` }
            placeholder="123"
            onChange={ (e) => {
              setAddressNumber(e.target.value);
              console.log(addressNumber);
            } }
            required
          />
        </label>
      </span>
      <div>
        <Link
          to="/customer/finished"
          data-testid={ `${buttonSubmitOrder}` }
          className={ `${buttonSubmitOrder}` }
        >
          <button type="button">FINALIZAR PEDIDO</button>
        </Link>
      </div>
    </div>
  );
}
