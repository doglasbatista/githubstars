import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../components/common/input/Input';
import Button from '../../../components/common/button/Button';

import SearchIcon from '../../../components/icons/search/Search';
import GithubStarsLogo from '../../../components/icons/githubStarsLogo/GithubStarsLogo';
import UserAvatar from '../../../components/common/userAvatar/UserAvatar';
import LogoutModal from '../../../components/nav/logoutModal/LogoutModal';

import { Container, LogoWrapper, Form, LogoutWrapper } from './styles';

const SearchBar = ({
  handleSubmit,
  userData,
  firstSearch,
  handleUserLogout,
}) => {
  const [username, setUsername] = useState('');
  const [logoutModalVisibility, setLogoutModalVisibility] = useState(false);

  const updateUsername = event => setUsername(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (username) handleSubmit(username);
  };

  const handleLogout = () => {
    setLogoutModalVisibility(true);
  };

  const cancelLogout = () => {
    setLogoutModalVisibility(false);
  };

  const confirmLogout = () => {
    handleUserLogout();
  };

  return (
    <Container firstSearch={firstSearch}>
      {logoutModalVisibility && (
        <LogoutModal
          closeModal={cancelLogout}
          confirmLogout={confirmLogout}
          data-testid="logout-modal"
        />
      )}
      <LogoutWrapper>
        <Button
          onClick={handleLogout}
          buttonType="ghost"
          data-testid="logout-button"
        >
          Logout
        </Button>
      </LogoutWrapper>
      <LogoWrapper firstSearch={firstSearch}>
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
          variant={firstSearch ? 'standard' : 'outlined'}
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
  firstSearch: PropTypes.bool.isRequired,
  handleUserLogout: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  userData: {},
};

export default SearchBar;
