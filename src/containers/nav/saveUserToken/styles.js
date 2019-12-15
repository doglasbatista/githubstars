import styled from 'styled-components';

import { neutralColor } from '../../../colors';

const Container = styled.div``;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 32px;

  > svg {
    width: 187px;
    height: 43px;
  }
`;

const TokenInfo = styled.p`
  color: ${neutralColor};
  text-align: center;
  font-size: 16px;
  margin-bottom: 32px;
`;

const Form = styled.form`
  button {
    margin-top: 16px;
    height: 50px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 100px;
    align-items: stretch;
    height: 60px;
    grid-gap: 0 24px;

    input {
      height: 100%;
    }
    button {
      height: 100%;
      margin-top: 0;
    }
  }
`;

export { Container, LogoWrapper, TokenInfo, Form };
