import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [products, setProducts] = useState([{}]);
  // const [name, settingSearchedName] = useState('');
  // const [filterByNumber, setfilterByNumber] = useState([]);

  // useEffect(() => {
  //   filterByNumber.map((item) => {
  //     const { column, comparison, value } = item;
  //     switch (comparison) {
  //     case 'maior que':
  //       return setProducts(
  //         [...products.filter((planet) => Number(planet[column]) > Number(value))],
  //       );
  //     case 'menor que':
  //       return setProducts(
  //         [...products.filter((planet) => Number(planet[column]) < Number(value))],
  //       );
  //     case 'igual a':
  //       return setProducts(
  //         [...products.filter((planet) => Number(planet[column]) === Number(value))],
  //       );
  //     default:
  //       return products;
  //     }
  //   });
  // }, [filterByNumber]);

  const contextValue = {
    products,
    // filters: { filterByName: { name } },
    // filterByNumber,
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('localhost/products');
      const newResponse = await response.json();
      setProducts(newResponse.results);
    };
    getProducts();
  }, []);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: node,
}.isRequired;

export default DeliveryProvider;
