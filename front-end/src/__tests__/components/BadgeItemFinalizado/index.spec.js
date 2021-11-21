import React from 'react';
import { render } from '@testing-library/react';
import BadgeItemFinalizado from '../../../components/BadgeItemFinalizado/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <BadgeItemFinalizado
        id="1"
        descricao="Cerveja Brahma"
        quantidade={ 2 }
        valorUnitario={ 4 }
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
