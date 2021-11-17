import React from 'react';
import ProductCard from '../components/ProductCard';

export default {
  title: 'ProductCard',
  component: ProductCard,
  argTypes: {

  },
};

const Template = (args) => <ProductCard { ...args } />;

export const normal = Template.bind({});
normal.args = {
  id: 'product-id-001',
  image: 'https://image.shutterstock.com/image-photo/glasses-different-sorts-craft-beer-600w-1212903172.jpg',
  price: 300,
  alt: 'beer-alt',
  description: 'beer-description',
};
