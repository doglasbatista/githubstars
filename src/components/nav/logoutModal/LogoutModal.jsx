import React from 'react';

import Button from '../../common/button/styles';

import { Overlay, ModalWrapper, ModalTitle, ButtonWrapper } from './styles';

const LogoutModal = () => {
  return (
    <Overlay>
      <ModalWrapper>
        <ModalTitle>Are you sure you want to Logout?</ModalTitle>
        <ButtonWrapper>
          <Button buttonType="ghost">Cancel</Button>
          <Button buttonType="filled">Logout</Button>
        </ButtonWrapper>
      </ModalWrapper>
    </Overlay>
  );
};

export default LogoutModal;
