import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    btnType: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button { ...args } />;

export const primary = Template.bind({});
primary.args = {
  btnType: 'primary',
  children: 'Primário',
};

export const secondary = Template.bind({});
secondary.args = {
  btnType: 'secondary',
  children: 'Secundário',
};

export const tertiary = Template.bind({});
tertiary.args = {
  btnType: 'tertiary',
  children: 'Terciário',
};
