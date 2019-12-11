import React, { useState } from 'react';

import Input from '../../common/input/Input';

import SearchIcon from '../../icons/search/Search';

const SearchBar = () => {
  const [username, setUsername] = useState('');

  const updateUsername = event => setUsername(event.target.value);

  return (
    <Input
      label="github username..."
      id="username"
      value={username}
      onChange={updateUsername}
      icon={<SearchIcon />}
    />
  );
};

export default SearchBar;
