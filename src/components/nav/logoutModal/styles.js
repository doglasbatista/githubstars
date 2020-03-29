import styled from 'styled-components';
import { transparentize, rgba } from 'polished';

import { black, white, neutralColor } from '../../../colors';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${rgba(black, 0.4)};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background: ${white};
  box-shadow: 4px 4px 40px ${transparentize(0.75, black)};
  border-radius: 5px;
  width: 90%;
  max-width: 700px;
  padding: 32px;
`;

const ModalTitle = styled.h1`
  font-size: 20px;
  line-height: 23px;
  color: ${neutralColor};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;

  button {
    width: 120px;
    margin: 0 4px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ModalInfo = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${neutralColor};
  margin-top: 8px;
`;

export { Overlay, ModalWrapper, ModalTitle, ButtonWrapper, ModalInfo };
