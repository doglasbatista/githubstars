import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  describe('submitting the form', () => {
    let handleSubmit;

    beforeEach(() => {
      handleSubmit = jest.fn();
    });

    it('calls handleSubmit when user submit the form', () => {
      const { getByTestId } = render(<SearchBar handleSubmit={handleSubmit} />);
      const formElement = getByTestId('search-bar-form');

      fireEvent.submit(formElement);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('calls handleSubmit with input value', () => {
      const { getByTestId } = render(<SearchBar handleSubmit={handleSubmit} />);
      const formElement = getByTestId('search-bar-form');
      const usernameInputElement = getByTestId('username-input');

      fireEvent.change(usernameInputElement, {
        target: { value: 'getify' },
      });
      fireEvent.submit(formElement);

      expect(handleSubmit).toHaveBeenCalledWith('getify');
    });
  });
});
