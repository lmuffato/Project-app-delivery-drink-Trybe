import React from 'react';
import Button from '../../../components/Button';
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <Button
       btnType="primary"
       children="Teste"
       datatestid="1"
       full={false}
       onClick={jest.fn()}
      />)
    expect(JSON).toMatchSnapshot();
  });
});
