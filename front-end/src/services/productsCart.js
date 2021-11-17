const productsCart = (id, price, name, qty) => {
  if (localStorage.getItem('productsCard')) {
    const productsCard = localStorage.getItem('productsCard');
    if (productsCard.find((p) => p.name === name)) {
      productsCard.map((p) => {
        if (p.name === name) {
          p.quantity = qty;
        }
        return p;
      });
    } else {
      productsCard.push({ id, price, name, qty });
    }
  } else {
    localStorage.setItem('productsCart', JSON.stringify([{ id, price, name, qty }]));
  }
};

export default productsCart;
