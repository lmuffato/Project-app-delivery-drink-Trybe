module.exports = {
  NotFound: {
    error: {
      code: 404,
      message: 'Not found',
    },
  },
  passwordIsRequired: {
    error: {
      code: 400,
      message: '"password" is required',
    },
  },
  passwordCantBeEmpty: {
    error: {
      code: 400,
      message: '"password" is not allowed to be empty',
    },
  },
  emailIsRequired: {
    error: {
      code: 400,
      message: '"email" is required',
    },
  },
  emailMustBeValid: {
    error: {
      code: 400,
      message: '"email" must be a valid email',
    },
  },
  emailCantBeEmpty: {
    error: {
      code: 400,
      message: '"email" is not allowed to be empty',
    },
  },
  internalError: {
    error: {
      code: 500,
      message: 'internal server error',
    },
  },
};
