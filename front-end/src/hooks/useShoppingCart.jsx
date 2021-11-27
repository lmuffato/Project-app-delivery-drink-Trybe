import { useState } from 'react';
import { usePrice } from '../context/productsProvider';

const useShoppingCart = () => {
  const [quantity, setQuantity] = useState(0);
  const { putItem, setPutItem } = usePrice();

  const addItem = (newItem, id) => {
    const findItem = putItem.find((item) => item.id === id);
    if (findItem && findItem.quantity) {
      setQuantity(Number(quantity) + 1);
      findItem.quantity = Number(quantity) + 1;
    } else {
      setQuantity(quantity + 1);
      setPutItem((prevState) => (
        [...prevState, { ...newItem, quantity: Number(quantity) + 1 }]));
    }
  };

  const removeItem = (id) => {
    const findItem = putItem.find((item) => item.id === id);
    if (quantity === 0) {
      setQuantity(0);
      return null;
    }
    if (findItem) {
      setQuantity(quantity - 1);
      findItem.quantity = quantity - 1;
    }
    if (findItem.quantity === 0) {
      const itemToRemove = putItem.filter((item) => item.id !== id);
      setPutItem(itemToRemove);
      setQuantity(0);
    }
  };

  const handleChange = (event, newItem, id) => {
    const findItem = putItem.find((item) => item.id === id);
    if (findItem) {
      setQuantity(event.target.value.replace(/^0+/, ''));
      findItem.quantity = Number(event.target.value);
    } else {
      setQuantity(event.target.value.replace(/^0+/, ''));
      setPutItem((prevState) => (
        [...prevState, { ...newItem, quantity: Number(event.target.value) }]));
    }
  };

  return {
    addItem,
    removeItem,
    quantity,
    handleChange,
  };
};

export default useShoppingCart;
