import React, { Component } from 'react';

class login extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='email' placeholder='email@trybeer.com.br' required>
            Login
          </input>
          <input type='password' placeholder='*********'>
            Senha
          </input>
          <button type='button'>LOGIN</button>
          <button type='button'>Ainda não tenho conta</button>
        </form>
      </div>
    );
  }
}

export default login;
