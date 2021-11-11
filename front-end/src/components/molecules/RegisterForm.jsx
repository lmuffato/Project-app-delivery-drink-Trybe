import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import testID from '../../../datatestids.json';
import validateName from '../../utils/validations/validateName';
import validateEmail from '../../utils/validations/validateEmail';
import validatePassword from '../../utils/validations/validatePassword';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const RegisterForm = () => {
  const [register, setRegister] = useState({ fullName: '', email: '', password: '' });
  const { fullName, email, password } = register;
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleClick = () => {
    history.push('/products');
  };
  return (
    <form>
      <div className="children_container">
        <h3>Register</h3>
        <h5>Create your account to Delivery App!</h5>
        <Input
          className="register-name"
          type="text"
          data-testid={ testID[6] }
          name="fullName"
          value={ fullName }
          onChange={ handleChange }
          placeholder="Your name"
        />
        <Input
          className="register-email"
          type="email"
          data-testid={ testID[7] }
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder="Email"
        />
        <Input
          className="register-password"
          data-testid={ testID[8] }
          name="password"
          value={ password }
          onChange={ handleChange }
          placeholder="Password"
        />
        <Button
          className="btn-register"
          type="button"
          data-testid={ testID[9] }
          disabled={ !(validateName(fullName)
            && validateEmail(email)
            && validatePassword(password)) }
          onClick={ handleClick }
          text="SIGN UP"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
