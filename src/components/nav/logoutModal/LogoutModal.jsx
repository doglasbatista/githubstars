import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/button/styles';

import { Overlay, ModalWrapper, ModalTitle, ButtonWrapper } from './styles';

const LogoutModal = ({ closeModal, confirmLogout }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  const handleConfirmLogout = () => {
    confirmLogout();
  };

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalWrapper onClick={event => event.stopPropagation()}>
        <ModalTitle>Are you sure you want to Logout?</ModalTitle>
        <ButtonWrapper>
          <Button onClick={handleCloseModal} buttonType="ghost">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} buttonType="filled">
            Logout
          </Button>
        </ButtonWrapper>
      </ModalWrapper>
    </Overlay>
  );
};

LogoutModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  confirmLogout: PropTypes.func.isRequired,
};

export default LogoutModal;
