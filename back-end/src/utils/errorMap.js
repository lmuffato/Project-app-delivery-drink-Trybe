module.exports = {
  NotFound: {
    error: {
      code: 404,
      message: 'Not found',
    },
  },
  nameLessThanTwelve: {
    error: {
      code: 400,
      message: '"name" length must be at least 12 characters long',
    },
  },
  nameIsRequired: {
    error: {
      code: 400,
      message: '"name" is required',
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
  passwordGreaterThanSix: {
    error: {
      code: 400,
      message: '"password" length must be 6 characters long',
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
  userAlreadyExists: {
    error: {
      code: 409,
      message: 'User already registered',
    },
  },
  internalError: {
    error: {
      code: 500,
      message: 'internal server error',
    },
  },
  tokenNotFound: {
    error: {
      code: 401,
      message: 'Token not found',
    },
  },
  invalidToken: {
    error: {
      code: 401,
      message: 'Expired or invalid token',
    },
  },
};
