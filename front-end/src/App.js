import React, { useContext } from 'react';
import ApiContext from './context/ApiContext';

function App() {
  const { users, setAtt, att } = useContext(ApiContext);
  const click = () => {
    setAtt(!att);
    console.log(users);
  };
  return (
    <div>
      <button type="button" onClick={ click }>Clique</button>
    </div>
  );
}

export default App;
