import React, { useState } from 'react';

import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import Input from '../../../components/common/input/Input';
import Button from '../../../components/common/button/Button';

import { Container, LogoWrapper, TokenInfo, Form } from './styles';

const SaveUserToken = () => {
  const [personalToken, setPersonalToken] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handlePersonalToken = event => setPersonalToken(event.target.value);

  return (
    <Container>
      <LogoWrapper>
        <GithubStarsLogo />
      </LogoWrapper>

      <TokenInfo>
        Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,
        quis volutpat erat hendrerit non.
      </TokenInfo>

      <Form onSubmit={handleSubmit}>
        <Input
          id="personal-token"
          value={personalToken}
          onChange={handlePersonalToken}
          label="github personal token..."
          variant="outlined"
        />
        <Button>Save</Button>
      </Form>
    </Container>
  );
};

export default SaveUserToken;
