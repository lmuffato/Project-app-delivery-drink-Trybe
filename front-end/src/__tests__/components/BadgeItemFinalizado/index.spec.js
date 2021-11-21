import React from 'react';
import BadgeItemFinalizado from '../../../components/BadgeItemFinalizado/index'
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <BadgeItemFinalizado
        id="1"
        descricao="Cerveja Brahma"
        quantidade={2}
        valorUnitario={4}
      />)
    expect(JSON).toMatchSnapshot();
  });
});
