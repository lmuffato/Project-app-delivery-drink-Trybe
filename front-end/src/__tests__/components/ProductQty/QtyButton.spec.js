import React from 'react';
import { render } from '@testing-library/react';
import QtyButton from '../../../components/ProductQty/QtyButton';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <QtyButton
        id="1"
        position="remove"
        onClick={ jest.fn() }
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
