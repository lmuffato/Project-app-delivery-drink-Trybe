const fetchSale = async (customer, seller, cartProducts, address) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: customer.token,
    },
    mode: 'cors',
    body: JSON.stringify({ customer, seller, cartProducts, address }),
  };
  const response = await fetch('http://localhost:3001/sale', requestOptions)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

export default fetchSale;
