import React, { useEffect, useState } from 'react';
import CardProduct from '../Components/CardProduct';
import Navbar from '../Components/NavBar';

import { getProducts } from '../services/endpointsAPI';

export default function CustomerProducts() {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => resp)
      .then((data) => {
        setListProducts(data);
        setIsLoading(false);
      });
  }, []);

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
              />);
            }) }
      </main>

    </main>
  );
}
// <CardProduct dataTestIdError={ testId } message={ messageError }/>
