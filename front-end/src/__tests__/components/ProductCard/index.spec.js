import React from 'react';
import ProductCard from '../../../components/ProductCard/index';
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <ProductCard
        id="1"
        price={2}
        image="image.png"
        description="Descrição Teste"
        alt="Teste"
        onChange={jest.fn()}
      />)
    expect(JSON).toMatchSnapshot();
  });
});
