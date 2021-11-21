import React from 'react';
import Input from '../../../components/Input';
import { render } from '@testing-library/react';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <Input
       datatestid="1"
       label="Label"
       name="Input"
       onChange={jest.fn()}
       placeholder="Placeholder"
       type="Text"
       value="value"
      />)
    expect(JSON).toMatchSnapshot();
  });
});
