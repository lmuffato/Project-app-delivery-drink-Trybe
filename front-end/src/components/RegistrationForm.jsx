import React, { useState, useContext, useEffect } from 'react';
import Jwt from 'jsonwebtoken';
import '../styles/form.css';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import TextInput from './TextInput';
import regex from '../utils/regex';
import errorMap from '../utils/errorMap';

function Registration() {
  const { post, setUser } = useContext(Context);
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const { email, password, name } = registerForm;

    if (
      regex.email.test(email)
      && regex.password.test(password)
      && regex.name.test(name)
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [registerForm]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage(null);
      const { data } = await post('registration_form', registerForm);

      if (data.token) {
        const { token } = data;
        const { email, name, role } = Jwt.decode(token);
        const user = { name, email, role, token };
        console.log(user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);

        navigate(`/${role}/products`);
      }
    } catch (error) {
      console.log(error);
      const { status } = error.response;
      setErrorMessage(errorMap[status || '500']);
    }
  };

  return (
    <div className="border">
      <h1>Cadastro</h1>
      <form action="submit">
        <TextInput
          name="name"
          value={ registerForm.name }
          dataTestId="common_register__input-name"
          onChange={ handleChange }
          placeholder="Seu Nome"
        />
        <TextInput
          name="email"
          value={ registerForm.email }
          dataTestId="common_register__input-email"
          onChange={ handleChange }
          placeholder="email@email.com"
        />
        <TextInput
          name="password"
          value={ registerForm.password }
          dataTestId="common_register__input-password"
          type="password"
          onChange={ handleChange }
          placeholder="******"
        />
        <button
          type="submit"
          data-testid="common_register__button-register"
          onClick={ handleSubmit }
          disabled={ disableButton }
        >
          Cadastrar
        </button>
      </form>
      <span
        hidden={ !errorMessage }
        data-testid="common_register__element-invalid_register"
      >
        { errorMessage }
      </span>
    </div>
  );
}

export default Registration;
