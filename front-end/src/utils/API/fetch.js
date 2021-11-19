const APPLICATION_JSON = 'application/json';
export const loginAction = async ({ email, password }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/login',
      {
        method: 'POST',
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
          Authorization,
        },
        body: JSON.stringify({ email, password }),
      });
    const user = await rawResponse.json();
    return user;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const registerAction = async ({ fullName, email, password }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/register',
      {
        method: 'POST',
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
          Authorization,
        },
        body: JSON.stringify({ fullName, email, password }),
      });
    const token = await rawResponse.json();
    return token;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const fetchProducts = async (token) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/products',
      {
        method: 'GET',
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
          Authorization: token,
        },
      });
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const fetchSales = async (token) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/sales',
      {
        method: 'GET',
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
          Authorization: token,
        },
      });
    console.log('🚀 ~ rawResponse', rawResponse);
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
