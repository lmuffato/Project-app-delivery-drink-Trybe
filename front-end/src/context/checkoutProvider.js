import React, { useState } from 'react';
import { element } from 'prop-types';
import CheckoutContext from './checkoutContext';

function RecipesProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  function addItem(qtd, price) {
    console.log(qtd, price);
  }

  return (
    <CheckoutContext.Provider value={ { totalValue, setTotalValue, addItem } }>
      {children}
    </CheckoutContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
