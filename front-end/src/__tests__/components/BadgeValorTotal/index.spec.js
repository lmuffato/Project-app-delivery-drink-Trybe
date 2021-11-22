import React from 'react';
import { render } from '@testing-library/react';
import BadgeValorTotal from '../../../components/BadgeValorTotal/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <BadgeValorTotal
        price={ 3 }
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
