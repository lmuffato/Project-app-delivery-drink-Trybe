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

  async function addItem(qtd, price, id, name) {
    if (aux) {
      const productBool = aux.some((bool) => bool.id === id);
      if (productBool) {
        const newSales = aux.map((item) => {
          if (item.id === id) return { id, qtd, name, price: (qtd * price).toFixed(2) };
          return item;
        });
        return setAux(newSales);
      }

      if (aux.length === 0 && qtd > 0) {
        return setAux([...aux, { id, qtd, name, price: (qtd * price).toFixed(2) }]);
      }
      if (qtd > 0) {
        return setAux([...aux, { id, qtd, name, price: (qtd * price).toFixed(2) }]);
      }
      return null;
    }
  }

  return (
    <CheckoutContext.Provider value={ { addItem, total, aux } }>
      {children}
    </CheckoutContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
