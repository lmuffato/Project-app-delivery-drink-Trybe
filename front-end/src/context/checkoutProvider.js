import React, { useState, useEffect } from 'react';
import { element } from 'prop-types';
import CheckoutContext from './checkoutContext';

function RecipesProvider({ children }) {
  // const [alltotalValue, setAllTotalValue] = useState([]);
  const [aux, setAux] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (aux) {
      const result = aux.reduce((curr, next) => curr + parseFloat(next.price), 0);
      setTotal(result);
    }
  }, [aux]);

  async function addItem(qtd, price, id) {
    console.log(aux);
    if (aux) {
      const productBool = aux.some((bool) => bool.id === id);
      if (productBool) {
        console.log('bool');
        const newSales = aux.map((item) => {
          if (item.id === id) return { id, price: (qtd * price).toFixed(2) };
          return item;
        });
        return setAux(newSales);
      }

      if (aux.length === 0 && qtd > 0) {
        return setAux([...aux, { id, price: (qtd * price).toFixed(2) }]);
      }
      if (qtd > 0) {
        console.log('newProduct');
        return setAux([...aux, { id, price: (qtd * price).toFixed(2) }]);
      }
      return setAux([{ price: 0 }]);
    }
  }

  return (
    <CheckoutContext.Provider value={ { addItem, total } }>
      {children}
    </CheckoutContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
