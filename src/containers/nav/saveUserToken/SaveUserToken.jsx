import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import Input from '../../../components/common/input/Input';
import Button from '../../../components/common/button/Button';

import { setAccessToken } from '../../../utils/utils';

import { Container, LogoWrapper, TokenInfo, Form } from './styles';

const SaveUserToken = ({ callback }) => {
  const [personalToken, setPersonalToken] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!personalToken) return;

    setAccessToken(personalToken);
    callback();
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

      <Form onSubmit={handleSubmit} data-testid="user-token-form">
        <Input
          data-testid="token-input"
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

SaveUserToken.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default SaveUserToken;
