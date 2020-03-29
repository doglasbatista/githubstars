import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LogoutModal from './LogoutModal';

describe('<LogoutModal />', () => {
  describe('closeModal', () => {
    it('calls closeModal when user click on the overlay', () => {
      const closeModalMock = jest.fn();
      const { getByTestId } = render(
        <LogoutModal closeModal={closeModalMock} confirmLogout={() => {}} />
      );
      const modalOverlay = getByTestId('modal-overlay');

      fireEvent.click(modalOverlay);

      expect(closeModalMock).toHaveBeenCalledTimes(1);
    });

    it("doesn't calls closeModal when user click on the modal box", () => {
      const closeModalMock = jest.fn();
      const { getByTestId } = render(
        <LogoutModal closeModal={closeModalMock} confirmLogout={() => {}} />
      );
      const modalWrapper = getByTestId('modal-wrapper');

      fireEvent.click(modalWrapper);

      expect(closeModalMock).toHaveBeenCalledTimes(0);
    });

    it('calls closeModal when user click on the cancel button', () => {
      const closeModalMock = jest.fn();
      const { getByTestId } = render(
        <LogoutModal closeModal={closeModalMock} confirmLogout={() => {}} />
      );
      const cancelButton = getByTestId('cancel-button');

      fireEvent.click(cancelButton);

      expect(closeModalMock).toHaveBeenCalledTimes(1);
    });

    it("doesn't calls closeModal when user click on confirm button", () => {
      const closeModalMock = jest.fn();
      const { getByTestId } = render(
        <LogoutModal closeModal={closeModalMock} confirmLogout={() => {}} />
      );
      const confirmButton = getByTestId('confirm-button');

      fireEvent.click(confirmButton);

      expect(closeModalMock).toHaveBeenCalledTimes(0);
    });
  });

  describe('confirmLogout', () => {
    it('calls confirmLogout when user click on the confirm button', () => {
      const confirmLogoutMock = jest.fn();
      const { getByTestId } = render(
        <LogoutModal confirmLogout={confirmLogoutMock} closeModal={() => {}} />
      );
      const confirmButton = getByTestId('confirm-button');

      fireEvent.click(confirmButton);

      expect(confirmLogoutMock).toHaveBeenCalledTimes(1);
    });
  });
});
