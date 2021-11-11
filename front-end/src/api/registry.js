const appjson = 'application/json';

const registry = (name, email, password, role) => {
  const body = JSON.stringify({
    name,
    email,
    password,
    role,
  });

  return fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      Accept: appjson,
      'Content-Type': appjson,
    },
    body,
  }).then((response) => response.json());
};

export default registry;
