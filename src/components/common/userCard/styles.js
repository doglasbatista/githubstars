import styled from 'styled-components';

import { primaryColor, primaryColorLight, white } from '../../../colors';

const Container = styled.div`
  background-color: ${primaryColor}
  border-radius: 5px 0 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 0;
  color: ${white};
  font-size: 20px;
  text-align: center;
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 17px;
`;

const UserName = styled.span`
  font-weight: 400;
`;

const NickName = styled.span`
  font-weight: 300;
`;

const UserDetails = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 27px;
  background-color: ${primaryColorLight};
  text-align: center;
  padding: 27px 16px;
`;

const UserBio = styled.div`
  font-size: 14px;
  margin-bottom: 37px;
`;

const InfoList = styled.ul`
  list-style-type: none;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;

  :not(:last-of-type) {
    margin-bottom: 16px;
  }

  > svg {
    min-width: 14px;
    min-height: 14px;
    margin-right: 6px;
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;

  > svg {
    min-width: 14px;
    min-height: 14px;
    margin-right: 6px;
  }
`;

export {
  Container,
  Img,
  UserName,
  NickName,
  UserDetails,
  UserBio,
  InfoList,
  InfoItem,
  Link,
};
