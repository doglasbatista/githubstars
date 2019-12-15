import styled from 'styled-components';

import { neutralColor } from '../../../colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    width: 62px;
    height: 51px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      width: 92px;
      height: 81px;
      margin-bottom: 32px;
    }
  }
`;

const Text = styled.span`
  color: ${neutralColor};
  font-weight: 300;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export { Container, Text };
