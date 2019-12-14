import styled from 'styled-components';
import { transparentize } from 'polished';

import { white, black, neutralColor } from '../../../colors';

const Container = styled.div`
  background-color: ${white};
  box-shadow: 1px 1px 5px ${transparentize(0.85, black)};
  padding: 27px 32px 34px;

  :not(:last-of-type) {
    margin-bottom: 33px;
  }
`;

const Title = styled.h3`
  color: ${neutralColor};
  font-size: 20px;
  font-weight: 400;
`;

const Description = styled.p`
  color: ${neutralColor};
  margin: 8px 0;
  font-size: 16px;
`;

const RepoInfo = styled.div``;

const TotalCount = styled.span`
  display: flex;
  color: ${neutralColor};
  font-weight: 300;

  > svg {
    margin-right: 4px;
  }
`;

export { Container, Title, Description, RepoInfo, TotalCount };
