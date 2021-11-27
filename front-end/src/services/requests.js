async function postUser(userData, rota) {
  const response = await fetch(`http://localhost:3001/${rota}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  const { token, data, message } = await response.json();
  return { token, data, message, status: response.status };
}

export async function getPruducts() {
  const response = await fetch('http://localhost:3001/customer/products');
  const data = await response.json();
  return { response, data };
}

export async function getSales(dataUser) {
  const { token } = dataUser;
  const response = await fetch('http://localhost:3001/sales', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: token },
  });

  const sales = await response.json();
  return sales;
}

export default postUser;
