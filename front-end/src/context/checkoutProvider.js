import React, { useState } from 'react';
import { element } from 'prop-types';



function RecipesProvider({ children }) {
    const [totalValue,setTotalValue] = useState(0);





  return (
    <CheckoutContext.Provider value={ {totalValue } }>
      {children}
    </CheckoutContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
