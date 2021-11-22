import React from 'react';
import { render } from '@testing-library/react';
import ProductQty from '../../../components/ProductQty/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <ProductQty
        id="1"
        label="Label Teste"
        value="Value Teste"
        onAdd={ jest.fn() }
        onRemove={ jest.fn() }
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
