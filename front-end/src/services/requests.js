async function postUser(userData, rota) {
  const response = await fetch(`http://localhost:3001/${rota}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  const data = await response.json();

  return { data, status: response.status };
}

export async function getPruducts() {
  const response = await fetch('http://localhost:3001/customer/products');
  const data = await response.json();
  return { response, data };
}

export default postUser;
