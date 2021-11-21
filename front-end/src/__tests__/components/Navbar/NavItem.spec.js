import React from 'react';
import NavItem from '../../../components/Navbar/NavItem';
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <NavItem
       active={true}
       children="Teste"
       testid="1"
       variant="secondary"
      />)
    expect(JSON).toMatchSnapshot();
  });
});
