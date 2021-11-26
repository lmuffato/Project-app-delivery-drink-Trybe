import React, { useState, useEffect } from 'react';
import { element } from 'prop-types';
import CheckoutContext from './checkoutContext';

function RecipesProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const [aux, setAux] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (aux) {
      const result = aux.reduce(
        (curr, next) => curr + parseFloat(next.price),
        0,
      );
      setTotal(result);
    }
  }, [aux]);

  async function addItem(qtd, price, id, name) {
    const removeItem = aux.filter((item) => item.quantity === 0);
    setAux(removeItem);
    const newItem = {
      product_id: id,
      quantity: qtd,
      name,
      price: (qtd * price).toFixed(2),
    };
    if (aux) {
      const productBool = aux.some((bool) => bool.product_id === id);
      if (productBool) {
        const newSales = aux.map((item) => {
          if (item.product_id === id) return newItem;
          return item;
        });
        return setAux(newSales);
      }

      if (aux.length === 0 && qtd > 0) {
        return setAux([...aux, newItem]);
      }
      if (qtd > 0) {
        return setAux([...aux, newItem]);
      }
    }
  }

  return (
    <CheckoutContext.Provider
      value={ { addItem, total, aux, setAux, logged, setLogged } }
    >
      {children}
    </CheckoutContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
