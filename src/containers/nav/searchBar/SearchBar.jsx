import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../components/common/input/Input';

import SearchIcon from '../../../components/icons/search/Search';
import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import UserAvatar from '../../../components/common/userAvatar/UserAvatar';

import { Container, LogoWrapper, Form } from './styles';

const SearchBar = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');

  const updateUsername = event => setUsername(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(username);
  };

  return (
    <Container>
      <LogoWrapper>
        <GithubStarsLogo />
      </LogoWrapper>
      <Form onSubmit={onSubmit}>
        <Input
          label="github username..."
          id="username"
          value={username}
          onChange={updateUsername}
          icon={<SearchIcon />}
        />
        <UserAvatar
          imageUrl="https://avatarfiles.alphacoders.com/131/131749.png"
          username="rick sanchez"
          width="64px"
          height="64px"
        />
      </Form>
    </Container>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
