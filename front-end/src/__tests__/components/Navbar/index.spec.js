import React from 'react';
import Navbar from '../../../components/Navbar/index'
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <Navbar
        userType="customer"
        username="João"
      />)
    expect(JSON).toMatchSnapshot();
  });
});
