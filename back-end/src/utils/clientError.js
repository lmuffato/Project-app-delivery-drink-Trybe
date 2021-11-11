const clientError = {
  badRequest: (message) => ({
    statusCode: 400,
    error: 'Bad Request',
    message,
  }),
  unauthorized: (message) => ({
    statusCode: 401,
    error: 'Unauthorized',
    message,
  }),
  notFound: (message) => ({
    statusCode: 404,
    error: 'Not Found',
    message,
  }),
  conflict: (message) => ({
    statusCode: 409,
    error: 'Conflict',
    message,
  }),
};

module.exports = clientError;
