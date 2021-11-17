import React from 'react';
import ProductOrderCard from '../components/ProductOrderCard';

export default {
  title: 'ProductOrderCard',
  component: ProductOrderCard,
  argTypes: {
    status: { options: ['pending', 'delivered', 'preparing'] },
    user: { options: ['customer', 'seller'] },
  },
};

const Template = (args) => <ProductOrderCard { ...args } />;

export const Default = Template.bind({});
Default.args = {
  date: '16.11.2021',
  price: 100,
  orderId: '2021',
  status: 'pending',
  user: 'customer',
};

export const WithAdress = Template.bind({});
WithAdress.args = {
  date: '16.11.2021',
  price: 100,
  orderId: '0012',
  status: 'pending',
  address: 'meu endereço atual',
  user: 'seller',
};
