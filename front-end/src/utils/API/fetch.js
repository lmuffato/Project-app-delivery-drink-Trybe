const APPLICATION_JSON = 'application/json';
export const loginAction = async ({ email, password }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/login',
      {
        method: 'POST',
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
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
          Authorization: token,
          'Content-Type': APPLICATION_JSON,
        },
      });
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
      {
        method: 'POST',
        headers: {
          Accept: APPLICATION_JSON,
          Authorization: token,
          'Content-Type': APPLICATION_JSON,
        },
        body: JSON.stringify({
          userId,
          sellerId,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          products,
        }),
      });
    const saleId = await rawResponse.json();
    return saleId;
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
          Authorization: token,
          'Content-Type': APPLICATION_JSON,
        },
      });
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const saleActionGetById = async (id) => {
  try {
    const rawResponse = await fetch(`http://localhost:3001/sales/${id}`,
      {
        method: 'GET',
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
        },
      });
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const changeOrderStatus = async ({ token, id, newStatus }) => {
  try {
    const rawResponse = await fetch(`http://localhost:3001/sales/${id}`,
      {
        method: 'PUT',
        headers: {
          Accept: APPLICATION_JSON,
          Authorization: token,
          'Content-Type': APPLICATION_JSON,
        },
        body: JSON.stringify({ newStatus }),
      });
    const { result: status } = await rawResponse.json();
    return status;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const getUsers = async () => {
  try {
    const rawResponse = await fetch('http://localhost:3001/users',
      {
        method: 'GET',
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
        },
      });
    const { result } = await rawResponse.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
