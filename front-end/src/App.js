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

// <Route exact path="/">
//   {loggedIn ? <Redirect to="/login" /> : <Login />}
// </Route>

export default App;
