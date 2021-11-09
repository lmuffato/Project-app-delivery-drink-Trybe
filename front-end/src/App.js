import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Form from './components/form';

function App() {
  return (
    <Provider>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
