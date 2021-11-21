import React from 'react';
import BadgeValorTotal from '../../../components/BadgeValorTotal/index'
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <BadgeValorTotal
        price={3}
      />)
    expect(JSON).toMatchSnapshot();
  });
});
