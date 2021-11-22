import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../../../components/ProductCard/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <ProductCard
        id="1"
        price={ 2 }
        image="image.png"
        description="Descrição Teste"
        alt="Teste"
        onChange={ jest.fn() }
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
