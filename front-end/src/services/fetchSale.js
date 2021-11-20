import axios from 'axios';

const fetchSale = async (customer, sellerId, cartProducts, address) => {
  const { token } = customer;
  const response = await axios.post('http://localhost:3001/sale', { customer, sellerId, cartProducts, address },
    { headers: { Authorization: token } });
  return response;
  // const requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     authorization: token,
  //   },
  //   mode: 'cors',
  //   body: JSON.stringify({ customer, seller, cartProducts, address }),
  // };
  // const response = await fetch('http://localhost:3001/sale', requestOptions)
  //   .then((res) => res.json())
  //   .then((data) => data);
  // console.log(response);
  // return response;
};

export default fetchSale;
