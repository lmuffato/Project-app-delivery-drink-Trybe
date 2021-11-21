import React from 'react';
import ProductQty from '../../../components/ProductQty/index';
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <ProductQty
        id="1"
        label="Label Teste"
        value="Value Teste"
        onAdd={jest.fn()}
        onRemove={jest.fn()}
      />)
    expect(JSON).toMatchSnapshot();
  });
});
