import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CardProduct from '../Components/CardProduct';
import Navbar from '../Components/NavBar';
import NewOrderContext from '../context/NewOrderContext';
import { getProducts, checkUserToken } from '../services/endpointsAPI';
import { getItemFromLocalStorage } from '../services/localStorage';
import '../Styles/CustomerProducts.css';

export default function CustomerProducts() {
  const history = useHistory();
  const { itensList } = useContext(NewOrderContext);
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [changeSomeStatus, setChangeSomeStatus] = useState(false);
  const [totalPriceAllProducts, setTotalPriceAllProducts] = useState(0);

  const validToken = async () => {
    try {
      const { token } = await getItemFromLocalStorage('user');
      await checkUserToken(token);
    } catch (e) {
      history.push('/login');
    }
  };

  const roundPrice = (value) => {
    const totalPrice = Math.round((value) * 100) / 100;
    return totalPrice;
  };

  useEffect(() => {
    let soma = 0;
    const totalPricePerItem = itensList.map((item) => item.quantity * item.price);
    totalPricePerItem.forEach((element) => {
      soma += element;
    });
    if (totalPricePerItem.length)setTotalPriceAllProducts(roundPrice(soma));
  }, [itensList]);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => resp)
      .then((data) => setListProducts(data));
    setIsLoading(false);
  }, [changeSomeStatus]);

  useEffect(() => {
    validToken();
  }, [validToken]);

  const clickLoginButton = () => {
    history.push('/customer/checkout');
  };

  return (
    <div className="container">
      <Navbar />
      <button
        type="button"
        data-testid="customer_products__button-cart"
        className=""
        disabled={ totalPriceAllProducts === 0 }
        onClick={ clickLoginButton }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          Ver Carrinho: R$
          {' '}
          {totalPriceAllProducts.toFixed(2).toString().replace('.', ',')}
        </span>
      </button>
      <main className="container">
        { isLoading ? <h3>Carregando...</h3>
          : (
            <div className="cards-container">
              {
                listProducts
                  .map((product) => (
                    <CardProduct
                      key={ product.id }
                      id={ product.id }
                      drink={ product.name }
                      cost={ product.price }
                      thumb={ product.urlImage }
                      changeSomeStatus={ changeSomeStatus }
                      setChangeSomeStatus={ setChangeSomeStatus }
                    />
                  ))
              }
            </div>
          ) }
      </main>
    </div>
  );
}
