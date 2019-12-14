import styled from 'styled-components';
import { transparentize } from 'polished';

import { black } from '../../../colors';

const Container = styled.div`
  box-shadow: 4px 4px 40px ${transparentize(0.75, black)};
  border-radius: 5px;
  padding: 32px;

  :first-child {
    margin-top: 32px;
  }
`;

export { Container }; // eslint-disable-line
