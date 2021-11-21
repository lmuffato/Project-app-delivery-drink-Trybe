import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardProduct from '../Components/CardProduct';
import Navbar from '../Components/NavBar';
import '../Styles/CustomerProducts.css';
import { getProducts, checkUserToken } from '../services/endpointsAPI';
import { getItemFromLocalStorage } from '../services/localStorage';

// checkUserToken
export default function CustomerProducts() {
  const history = useHistory();
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [changeSomeStatus, setChangeSomeStatus] = useState(false);

  const validToken = async () => {
    try {
      const { token } = await getItemFromLocalStorage('user');
      await checkUserToken(token);
    } catch (e) {
      console.log('catch da valid token', e.message);
      history.push('/login');
    }
  };

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

  return (
    <div className="mainCustomerProducts">
      <Navbar />
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        className="buttonVercarrinho"
      >
        Ver Carrinho
      </button>
      <main>
        { isLoading ? <h3>Carregando...</h3>
          : (
            <div className="bodyCustomerProducts">
              {
                listProducts
                  .map((product) => {
                    const { id, name, price, urlImage } = product;
                    return (<CardProduct
                      key={ id }
                      id={ id }
                      drink={ name }
                      cost={ price }
                      thumb={ urlImage }
                      changeSomeStatus={ changeSomeStatus }
                      setChangeSomeStatus={ setChangeSomeStatus }
                    />);
                  })
              }
            </div>
          ) }
      </main>
    </div>
  );
}
// <CardProduct dataTestIdError={ testId } message={ messageError }/>
