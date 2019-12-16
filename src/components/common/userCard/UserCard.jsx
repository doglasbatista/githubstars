import React from 'react';
import PropTypes from 'prop-types';

import MailIcon from '../../icons/mail/Mail';
import PinIcon from '../../icons/pin/Pin';
import GlobeIcon from '../../icons/globe/Globe';

import {
  Container,
  Img,
  UserName,
  NickName,
  UserDetails,
  UserBio,
  InfoList,
  InfoItem,
  Link,
  UserInfo,
} from './styles';

const UserCard = ({
  userData: { avatarUrl, bio, email, location, login, name, websiteUrl },
}) => {
  return (
    <Container>
      <UserInfo>
        <Img src={avatarUrl} alt={name} />
        {name && <UserName>{name}</UserName>}
        <NickName>{login}</NickName>
      </UserInfo>
      <UserDetails>
        {bio && <UserBio>{bio}</UserBio>}
        <InfoList>
          {location && (
            <InfoItem>
              <PinIcon />
              {location}
            </InfoItem>
          )}
          {email && (
            <InfoItem>
              <MailIcon />
              {email}
            </InfoItem>
          )}
          {websiteUrl && (
            <InfoItem>
              <Link href={websiteUrl} target="_blank">
                <GlobeIcon />
                {websiteUrl}
              </Link>
            </InfoItem>
          )}
        </InfoList>
      </UserDetails>
    </Container>
  );
};

UserCard.propTypes = {
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    websiteUrl: PropTypes.string,
    organizations: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default UserCard;
