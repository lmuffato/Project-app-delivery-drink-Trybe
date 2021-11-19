import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardProduct from '../Components/CardProduct';
import Navbar from '../Components/NavBar';
import { getProducts, checkUserToken } from '../services/endpointsAPI';
import { getItemFromLocalStorage } from '../services/localStorage';

// checkUserToken
export default function CustomerProducts() {
  const history = useHistory();
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [changeSomeStatus, setChangeSomeStatus] = useState(false);

  const validToken = async (token) => {
    try {
      await checkUserToken(token);
    } catch (e) {
      history.push('/login');
      // setErrorMessage(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => resp)
      .then((data) => {
        setListProducts(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const tokenLocalStarege = getItemFromLocalStorage('user');
    validToken(tokenLocalStarege.token);
    console.log(changeSomeStatus);
  }, [changeSomeStatus]);

  return (

    <main className="mainCustomerProducts">
      <nav>
        <Navbar />
      </nav>
      <main className="bodyCustomerProducts">
        { isLoading ? <h3>Carregando...</h3>
          : listProducts
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
            }) }
      </main>

    </main>
  );
}
// <CardProduct dataTestIdError={ testId } message={ messageError }/>
