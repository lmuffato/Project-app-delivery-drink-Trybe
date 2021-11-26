const Joi = require('joi');

export default function emailValidation(email, password) {
  const minPassawordValue = 5;
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string()
      .min(minPassawordValue)
      .required(),
  });
  const { error } = schema.validate({ email, password });
  console.log(error);
  if (!error) {
    return true;
  }
  return false;
}
