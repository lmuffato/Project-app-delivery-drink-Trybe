import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../../components/Navbar/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <Navbar
        userType="customer"
        username="João"
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
