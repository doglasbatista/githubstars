import styled from 'styled-components';

const Img = styled.img`
  border-radius: 50%;
  width: ${({ width }) => width}
  height: ${({ height }) => height}
`;

export { Img }; // eslint-disable-line
