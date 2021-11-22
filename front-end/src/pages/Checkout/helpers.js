// Helpers
export const calculeSubTotal = ({ quantity, price, name }) => ({
  name,
  quantity,
  price,
  total: (quantity * Number(price)).toFixed(2),
});

export const calculeTotal = (cart) => cart.reduce((acc, cur) => {
  acc += Number(cur.total);
  return acc;
}, 0);

export const formatList = (cart) => cart.map((item) => calculeSubTotal(item));

export const createSalePayload = (userId, Sellers, cart) => {
  const deliveryAddress = document.querySelector('#adress').value;
  const deliveryNumber = document.querySelector('#number').value;
  const seller = document.querySelector('#seller').value;
  const totalPrice = document.querySelector('#total').innerText;

  const sellerId = Sellers.find(({ name }) => name === seller);

  console.log();

  return {
    deliveryAddress,
    deliveryNumber,
    sellerId: sellerId.id,
    userId,
    totalPrice: Number(totalPrice.replace(',', '.')),
    status: 'Pendente',
    orders: cart,
  };
};

export const createUserCart = (products, quantities) => (
  products.reduce((acc, cur) => (
    quantities[cur.id] > 0
      ? [...acc, { ...cur, quantity: quantities[cur.id].toFixed(2) }]
      : [...acc]
  ), [])
);
