import styled, { keyframes } from 'styled-components';

import { black } from '../../../colors';

const loading = keyframes`
  0% { transform: scale(.8); }
  50% { transform: scale(1.2); }
  100% { transform: scale(.8); }
`;

const LoadinWrapper = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${black};
  opacity: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: 3s ${loading} infinite;
  }
`;

export default LoadinWrapper;
