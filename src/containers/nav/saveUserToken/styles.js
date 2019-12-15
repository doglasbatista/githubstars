import styled from 'styled-components';
import { lighten } from 'polished';

import { neutralColor, primaryColorDarken } from '../../../colors';

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
  letter-spacing: 0.2px;
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

const Link = styled.a`
  cursor: pointer;
  font-weight: 600;
  color: ${primaryColorDarken};
  transition: 0.2s ease-in;

  :hover {
    transition: 0.2s ease-in;
    color: ${lighten(0.1, primaryColorDarken)};
  }
`;

export { Container, LogoWrapper, TokenInfo, Form, Link };
