import React from 'react';
import { render } from '@testing-library/react';
import NavItem from '../../../components/Navbar/NavItem';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <NavItem
        active
        testid="1"
        variant="secondary"
      >
        Teste
      </NavItem>,
    );
    expect(JSON).toMatchSnapshot();
  });
});
