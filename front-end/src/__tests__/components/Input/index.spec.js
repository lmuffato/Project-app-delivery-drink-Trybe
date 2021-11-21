import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../../components/Input';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <Input
        datatestid="1"
        label="Label"
        name="Input"
        onChange={ jest.fn() }
        placeholder="Placeholder"
        type="Text"
        value="value"
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});
