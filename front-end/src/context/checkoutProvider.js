import React, { useState } from 'react';
import { element } from 'prop-types';
import CheckoutContext from './checkoutContext';

function RecipesProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  function addItem(qtd, price, op) {
    console.log(qtd);
    if (op === 'add') {
      const sum = parseFloat(totalValue) + (qtd * price);
      return setTotalValue((sum).toFixed(2));
    }
    if (op === 'remove') {
      const sub = parseFloat(totalValue) - price;
      return setTotalValue(sub.toFixed(2));
    }
    console.log(totalValue);
    const sum = parseFloat(totalValue) + (qtd * price);
    return setTotalValue(sum.toFixed(2));
  }

  return (
    <CheckoutContext.Provider value={ { totalValue, addItem, setTotalValue } }>
      {children}
    </CheckoutContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
