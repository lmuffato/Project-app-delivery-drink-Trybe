import React from 'react';
import { render } from '@testing-library/react';
import ProductOrderCard from '../../../components/ProductOrderCard/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <ProductOrderCard
        orderId="1"
        date="20012020"
        price={ 2 }
        status="delivered"
        address="Rua X"
        user="customer"
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
