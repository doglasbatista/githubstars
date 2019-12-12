import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../components/common/input/Input';

import SearchIcon from '../../../components/icons/search/Search';
import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import UserAvatar from '../../../components/common/userAvatar/UserAvatar';

import { Container, LogoWrapper, Form } from './styles';

const SearchBar = ({ handleSubmit, userData }) => {
  const [username, setUsername] = useState('');

  const updateUsername = event => setUsername(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (username) handleSubmit(username);
  };

  return (
    <Container>
      <LogoWrapper>
        <GithubStarsLogo />
      </LogoWrapper>
      <Form onSubmit={onSubmit} data-testid="search-bar-form">
        <Input
          label="github username..."
          id="username"
          value={username}
          onChange={updateUsername}
          icon={<SearchIcon />}
          data-testid="username-input"
        />
        {Object.keys(userData).length !== 0 && (
          <UserAvatar
            imageUrl={userData.avatarUrl}
            username={userData.username}
            width="64px"
            height="64px"
          />
        )}
      </Form>
    </Container>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string,
    username: PropTypes.string,
  }),
};

SearchBar.defaultProps = {
  userData: {},
};

export default SearchBar;
