import styled from 'styled-components';
import { darken } from 'polished';

import { primaryColorDarked, white, error } from '../../../colors';

const appearanceStyle = {
  error: {
    backgroundColor: error,
  },
  success: {
    backgroundColor: primaryColorDarked,
  },
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ appearance }) =>
    appearanceStyle[appearance].backgroundColor};
  border-radius: 5px;
  color: ${white};
  font-size: 16px;
  padding: 16px;
`;

const Close = styled.div`
  color: ${darken(0.4, white)};
  margin-left: 12px;
  cursor: pointer;
`;

export { Container, Close };
