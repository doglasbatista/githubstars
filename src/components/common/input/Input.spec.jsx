import React from 'react';
import { render } from '@testing-library/react';

import Input from './Input';

describe('<Inut />', () => {
  it('renders the component without input value', () => {
    const constainer = render(
      <Input label="testings the input" id="input-id" />
    );

    expect(constainer).toMatchSnapshot();
  });

  it('renders the component with input value', () => {
    const constainer = render(
      <Input label="testings the input" id="input-id" value="Input value" />
    );

    expect(constainer).toMatchSnapshot();
  });
});
