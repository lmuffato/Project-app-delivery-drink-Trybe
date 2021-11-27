import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NewOrderContext from '../../context/NewOrderContext';
import UserContext from '../../context/userContext';
import { getAllUsersSallers,
  createInSalesAndSalesProducts,
} from '../../services/endpointsAPI';

const selectSeller = 'customer_checkout__select-seller';
const inputAddress = 'customer_checkout__input-address';
const inputAddressNumber = 'customer_checkout__input-addressNumber';
const buttonSubmitOrder = 'customer_checkout__button-submit-order';

export default function DeliveryDetails() {
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const { userId } = useContext(NewOrderContext);
  const { sellersList, setSellersList } = useContext(NewOrderContext);
  const { sellerId, setSellerId } = useContext(NewOrderContext);
  const { deliveryAddress, setDeliveryAddress } = useContext(NewOrderContext);
  const { deliveryNumber, setDeliveryNumber } = useContext(NewOrderContext);
  const { totalPrice,
    setTotalPrice,
  } = useContext(NewOrderContext);
  const [isLoading, setIsLoading] = useState(false);
  const { itensList, setItensList } = useContext(NewOrderContext);

  const getSellersList = async () => {
    const arr = await getAllUsersSallers();
    setSellersList(arr);
  };

  const clearGlobalStates = () => {
    setDeliveryAddress('');
    setDeliveryNumber('');
    setTotalPrice('');
    setSellerId('');
    setItensList([]);
  };

  useEffect(() => {
    setIsLoading(true);
    getSellersList();
    setIsLoading(false);
  }, []);

  const defaultSeller = () => {
    if (sellersList.length !== 0) {
      setSellerId(sellersList[0].id);
    }
  };

  useEffect(() => {
    const seller = async () => {
      defaultSeller();
    };
    seller();
  }, [sellersList]);

  const roundValue = (value) => {
    const newValue = Math.round((value) * 100) / 100;
    return newValue.toFixed(2);
  };

  const redirectToPage = (id) => {
    const url = `/customer/orders/${id}`;
    history.push(url);
  };

  const createNewSale = async () => {
    const { token } = userData;
    const sale = {
      userId,
      totalPrice: roundValue(totalPrice),
      sellerId,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente',
    };
    const saleProductsArray = { saleProductsArray: itensList };
    const saleId = await createInSalesAndSalesProducts(token, sale, saleProductsArray);
    clearGlobalStates();
    redirectToPage(saleId);
  };

  useEffect(() => {
    console.log(sellerId);
  }, [sellerId]);

  const renderSellersList = () => {
    if (isLoading === true) { return null; }
    const list = sellersList.map((ele, index) => (
      <option key={ index } value={ `${ele.id}` }>{ele.name}</option>));
    return list;
  };

  const renderInputSelecSellerOptions = () => (
    <span>
      <label htmlFor={ `${selectSeller}` }>
        <p>P. Vendedora Responsável</p>
        <select
          id={ `${selectSeller}` }
          className={ `${selectSeller}` }
          data-testid={ `${selectSeller}` }
          name="SellersList"
          value={ sellerId }
          onChange={ (event) => {
            setSellerId(event.target.value);
          } }
        >
          { renderSellersList() }
        </select>
      </label>
    </span>
  );

  const renderInputAddress = () => (
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
            setDeliveryAddress(e.target.value);
          } }
          required
        />
      </label>
    </span>
  );

  const renderInputAddressNumber = () => (
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
            setDeliveryNumber(e.target.value);
          } }
          required
        />
      </label>
    </span>
  );

  const renderButtonFinishOrder = () => (
    <div>
      <button
        type="button"
        onClick={ createNewSale }
        className={ `${buttonSubmitOrder}` }
        data-testid={ `${buttonSubmitOrder}` }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );

  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>
      { renderInputSelecSellerOptions() }
      { renderInputAddress() }
      { renderInputAddressNumber() }
      { renderButtonFinishOrder() }
    </div>
  );
}
