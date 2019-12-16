import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import * as utils from '../../../utils/utils';

import SaveUserToken from './SaveUserToken';

describe('<SaveUserToken />', () => {
  describe('form submit', () => {
    const personalToken = 'super-secret-token';

    it('calls setAccessToken with input value when user submit the form', () => {
      utils.setAccessToken = jest.fn();
      const { getByTestId } = render(<SaveUserToken callback={() => {}} />);
      const inputElement = getByTestId('token-input');
      const formElement = getByTestId('user-token-form');

      fireEvent.change(inputElement, { target: { value: personalToken } });
      fireEvent.submit(formElement);

      expect(utils.setAccessToken).toHaveBeenCalledTimes(1);
      expect(utils.setAccessToken).toHaveBeenCalledWith(personalToken);
    });

    it('calls callback prop and setAccessToken when user click on "Save"', () => {
      const callbackFunction = jest.fn();
      utils.setAccessToken = jest.fn();
      const { getByText, getByTestId } = render(
        <SaveUserToken callback={callbackFunction} />
      );
      const inputElement = getByTestId('token-input');
      const saveButton = getByText('Save');

      fireEvent.change(inputElement, { target: { value: personalToken } });
      fireEvent.click(saveButton);

      expect(callbackFunction).toHaveBeenCalledTimes(1);
      expect(utils.setAccessToken).toHaveBeenCalledTimes(1);
    });

    it('calls callback prop when user submit the form', () => {
      const callbackFunction = jest.fn();
      const { getByTestId } = render(
        <SaveUserToken callback={callbackFunction} />
      );
      const inputElement = getByTestId('token-input');
      const formElement = getByTestId('user-token-form');

      fireEvent.change(inputElement, { target: { value: personalToken } });
      fireEvent.submit(formElement);

      expect(callbackFunction).toHaveBeenCalledTimes(1);
    });

    it("doesn't calls setAccessToken and callback prop when user don't inform the personalToken", () => {
      const callbackFunction = jest.fn();
      utils.setAccessToken = jest.fn();
      const { getByTestId } = render(
        <SaveUserToken callback={callbackFunction} />
      );
      const formElement = getByTestId('user-token-form');

      fireEvent.submit(formElement);

      expect(utils.setAccessToken).toHaveBeenCalledTimes(0);
      expect(callbackFunction).toHaveBeenCalledTimes(0);
    });
  });
});
