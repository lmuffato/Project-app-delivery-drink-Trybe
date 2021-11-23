import { parseJwt } from '../utils/utils'

async function postUser(userData, rota) {
  const response = await fetch(`http://localhost:3001/${rota}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  const token = await response.json();

  const { dataValues: { name, email, role } } = parseJwt(data);

  const data =  {
    token,
    name,
    email,
    role,
  }

  return { data, status: response.status };
}

export async function getPruducts() {
  const response = await fetch('http://localhost:3001/customer/products');
  const data = await response.json();
  return { response, data };
}

export default postUser;

// localStorage.setItem('token', response.token);
// JSON.parse(localStorage.getItem('ranking'));
// localStorage.setItem('ranking', JSON.stringify(rankingOnstorage));

// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split('.')[1]));
//   } catch (e) {
//     return null;
//   }
// };

// console.log(parseJwt(token))
