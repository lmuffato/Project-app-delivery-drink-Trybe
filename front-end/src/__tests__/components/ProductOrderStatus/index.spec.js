import React from 'react';
import { render } from '@testing-library/react';
import ProductOrderStatus from '../../../components/ProductOrderStatus/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <ProductOrderStatus
        status="pending"
        testid="1"
        full="Teste"
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
