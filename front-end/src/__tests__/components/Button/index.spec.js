import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../../components/Button';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <Button
        btnType="primary"
        datatestid="1"
        full={ false }
        onClick={ jest.fn() }
      >
        Teste
      </Button>,
    );
    expect(JSON).toMatchSnapshot();
  });
});
