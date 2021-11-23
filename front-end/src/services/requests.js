import { parseJwt } from '../utils/utils';

async function postUser(userData, rota) {
  const response = await fetch(`http://localhost:3001/${rota}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  const token = await response.json();

  if (token.message) return { data: tokem.message, status: response.status };

  const { name, email, role } = parseJwt(token);

  const data = { token, name, email, role };

  return { data, status: response.status };
}

export async function getPruducts() {
  const response = await fetch('http://localhost:3001/customer/products');
  const data = await response.json();
  return { response, data };
}

export default postUser;
