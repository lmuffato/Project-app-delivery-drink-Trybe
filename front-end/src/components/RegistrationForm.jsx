import React, { useState, useContext, useEffect } from 'react';
import '../styles/form.css';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import TextInput from './TextInput';
import regex from '../utils/regex';

function Registration() {
  const { handleChange, submitChange, setUser, user } = useContext(Context);
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUser({
      name: '',
      email: '',
      password: '',
    });

    return () => setUser({});
  }, []); // eslint-disable-line

  useEffect(() => {
    const { email, password, name } = user;

    if (
      regex.email.test(email)
      && regex.password.test(password)
      && regex.name.test(name)
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    const fiveSeconds = 5000;
    try {
      setErrorMessage(null);
      setSuccessMessage(null);
      await submitChange(e, 'registration_form');

      setSuccessMessage('Cadastrado com sucesso');

      setTimeout(() => navigate('/login'), fiveSeconds);
    } catch (error) {
      console.log(error.message);
      setErrorMessage('Email já cadastrado');
    }
  };

  return (
    <div className="border">
      <h1>Cadastro</h1>
      <form action="submit">
        <TextInput
          name="name"
          dataTestId="common_register__input-name"
          onChange={ handleChange }
          placeholder="Seu Nome"
        />
        <TextInput
          name="email"
          dataTestId="common_register__input-email"
          onChange={ handleChange }
          placeholder="email@email.com"
        />
        <TextInput
          name="password"
          dataTestId="common_register__input-password"
          type="password"
          onChange={ handleChange }
          placeholder="******"
        />
        <button
          type="submit"
          data-testid="common_register__input-register"
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
      <div
        hidden={ !successMessage }
      >
        { successMessage }
      </div>
    </div>
  );
}

export default Registration;
