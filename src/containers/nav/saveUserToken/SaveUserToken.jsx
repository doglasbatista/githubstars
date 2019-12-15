import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import Input from '../../../components/common/input/Input';
import Button from '../../../components/common/button/Button';

import { setAccessToken } from '../../../utils/utils';

import { Container, LogoWrapper, TokenInfo, Form, Link } from './styles';

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
        We need you let us know your{' '}
        <Link
          href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/"
          target="_blank"
        >
          personal-token
        </Link>
        . To access the Github API
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
