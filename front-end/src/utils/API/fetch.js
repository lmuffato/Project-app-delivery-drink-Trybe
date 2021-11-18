const requestMetadata = ({ method, body, Authentication }) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authentication,
  },
  body,
});

export const loginAction = async ({ email, password }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/login',
      requestMetadata({ method: 'POST', body: JSON.stringify({ email, password }) }));
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
      requestMetadata({ method: 'POST',
        body: JSON.stringify({ fullName, email, password }) }));
    const token = await rawResponse.json();
    return token;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const fetchProducts = async ({ token }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/products',
      requestMetadata({ method: 'GET', Authentication: token }));
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
