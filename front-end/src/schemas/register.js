import Joi from 'joi';

const nameMinLength = 12;
const passwordMinLength = 6;


export default Joi.object({
  email: Joi.string()
    .regex(/^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/)
    .message('Formato de e-mail inválido')
    .required(),

  password: Joi.string()
    .min(passwordMinLength)
    .message('A senha precisa ter pelo menos 6 caracteres')
    .required(),
  
  name: Joi.string()
    .min(nameMinLength)
    .message('O nome de usuário deve conter pelo menos 12 caracteres')
    .required(),
}).messages({
  'string.empty': 'Preencha todos os campos',
});