import React from 'react';
import ProductOrderStatus from '../../../components/ProductOrderStatus/index';
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <ProductOrderStatus
        status="pending"
        testid="1"
        full="Teste"
      />)
    expect(JSON).toMatchSnapshot();
  });
});
