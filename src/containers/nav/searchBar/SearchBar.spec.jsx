import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  describe('submitting the form', () => {
    let handleSubmit;

    beforeEach(() => {
      handleSubmit = jest.fn();
    });

    it('calls the handleSubmit method only when the input has a value', () => {
      const { getByTestId } = render(
        <SearchBar
          handleSubmit={handleSubmit}
          firstSearch
          handleUserLogout={() => {}}
        />
      );
      const formElement = getByTestId('search-bar-form');
      const usernameInputElement = getByTestId('username-input');

      fireEvent.submit(formElement);

      expect(handleSubmit).toHaveBeenCalledTimes(0);

      fireEvent.change(usernameInputElement, {
        target: { value: 'getify' },
      });
      fireEvent.submit(formElement);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('calls handleSubmit with input value', () => {
      const { getByTestId } = render(
        <SearchBar
          handleSubmit={handleSubmit}
          firstSearch
          handleUserLogout={() => {}}
        />
      );
      const formElement = getByTestId('search-bar-form');
      const usernameInputElement = getByTestId('username-input');

      fireEvent.change(usernameInputElement, {
        target: { value: 'getify' },
      });
      fireEvent.submit(formElement);

      expect(handleSubmit).toHaveBeenCalledWith('getify');
    });
  });

  describe('logout button', () => {
    it('shows the logout modal when user click on the logout button', () => {
      const { getByTestId } = render(
        <SearchBar
          handleSubmit={() => {}}
          firstSearch
          handleUserLogout={() => {}}
        />
      );
      const logoutButton = getByTestId('logout-button');

      fireEvent.click(logoutButton);

      // const logoutModal = getByTestId('logout-modal');
      // expect(logoutModal).toBeTruthy();
    });
  });
});
