const requestPOSTMetadata = (body) => ({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body,
});

export const loginAction = async ({ email, password }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/login',
      requestPOSTMetadata(JSON.stringify({ email, password })));
    const token = await rawResponse.json();
    return token;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const registerAction = async ({ fullName, email, password }) => {
  try {
    const rawResponse = await fetch('http://localhost:3001/register',
      requestPOSTMetadata(JSON.stringify({ fullName, email, password })));
    const token = await rawResponse.json();
    return token;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
