import React from 'react';

import SadFace from '../../icons/sadFace/SadFace';

import { Container, Text } from './styles';

const UserNotFound = () => {
  return (
    <Container>
      <SadFace />
      <Text>User not found</Text>
    </Container>
  );
};

export default UserNotFound;
