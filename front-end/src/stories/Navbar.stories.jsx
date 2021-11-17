import React from 'react';
import Navbar from '../components/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {
    userType: {
      options: ['seller', 'customer', 'admin'],
      type: 'radio',
    },
  },
};

const Template = (args) => <Navbar { ...args } />;

export const Seller = Template.bind({});
Seller.args = {
  userType: 'seller',
  username: 'name name',
};

export const Customer = Template.bind({});
Customer.args = {
  userType: 'customer',
  username: 'name name name name',
};

export const Admin = Template.bind({});
Admin.args = {
  userType: 'admin',
  username: 'name name name name name name',
};
