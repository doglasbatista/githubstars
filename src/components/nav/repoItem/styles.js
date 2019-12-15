import styled from 'styled-components';
import { transparentize } from 'polished';

import { white, black, neutralColor } from '../../../colors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 0 4px;
  align-items: center;
  background-color: ${white};
  box-shadow: 1px 1px 5px ${transparentize(0.85, black)};
  padding: 12px 16px;
  @media (min-width: 768px) {
    grid-gap: 0;
    grid-template-columns: 75% 25%;
    padding: 27px 32px 34px;
  }

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

const RepoActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    max-width: 91px;
  }
`;

export { Container, Title, Description, RepoInfo, TotalCount, RepoActions };
