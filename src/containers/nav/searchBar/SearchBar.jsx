import React, { useState } from 'react';

import Input from '../../../components/common/input/Input';

import SearchIcon from '../../../components/icons/search/Search';
import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import UserAvatar from '../../../components/common/userAvatar/UserAvatar';

import { Container, LogoWrapper, Form } from './styles';

const SearchBar = () => {
  const [username, setUsername] = useState('');

  const updateUsername = event => setUsername(event.target.value);

  return (
    <Container>
      <LogoWrapper>
        <GithubStarsLogo />
      </LogoWrapper>
      <Form>
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

export default SearchBar;
