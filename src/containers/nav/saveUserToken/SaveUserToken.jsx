import React from 'react';

import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import Input from '../../../components/common/input/Input';
import Button from '../../../components/common/button/Button';

import { Container, LogoWrapper, TokenInfo, Form } from './styles';

const SaveUserToken = () => {
  return (
    <Container>
      <LogoWrapper>
        <GithubStarsLogo />
      </LogoWrapper>

      <TokenInfo>
        Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,
        quis volutpat erat hendrerit non.
      </TokenInfo>

      <Form>
        <Input label="github personal token..." variant="outlined" />
        <Button>Save</Button>
      </Form>
    </Container>
  );
};

export default SaveUserToken;
