const requestMetadata = ({ method, body, Authorization }) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization,
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

export const fetchProducts = async (token) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/products',
      requestMetadata({ method: 'GET', Authorization: token }));
    // console.log('🚀 ~ rawResponse', rawResponse);
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const saleAction = async (sale) => {
  const { token, userId, sellerId, totalPrice,
    deliveryAddress, deliveryNumber, products } = sale;
  try {
    const rawResponse = await fetch('http://localhost:3001/sales',
      requestMetadata({
        method: 'POST',
        Authorization: token,
        body: JSON.stringify({
          userId,
          sellerId,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          products,
        }) }));
    const saleId = await rawResponse.json();
    return saleId;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const saleActionGet = async (sale) => {
  const { token } = sale;
  try {
    const rawResponse = await fetch('http://localhost:3001/sales',
      requestMetadata({
        method: 'GET',
        Authorization: token,
      }));
    const saleId = await rawResponse.json();
    return saleId;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const saleActionGetById = async (sale) => {
  const { token } = sale;
  try {
    const rawResponse = await fetch('http://localhost:3001/sales',
      requestMetadata({
        method: 'GET',
        Authorization: token,
      }));
    const saleId = await rawResponse.json();
    return saleId;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const getUsers = async () => {
  try {
    const rawResponse = await fetch('http://localhost:3001/users',
      requestMetadata({ method: 'GET' }));
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
