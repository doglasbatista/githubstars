import React from 'react';
import PropTypes from 'prop-types';

import { Img } from './styles';

const UserAvatar = ({ imageUrl, username, width, height }) => {
  return <Img src={imageUrl} alt={username} width={width} height={height} />;
};

UserAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default UserAvatar;
