import styled from 'styled-components';

import { primaryColor, primaryColorLight, white } from '../../../colors';

const Container = styled.div`
  height: fit-content;
  overflow: hidden;
  background-color: ${primaryColor};
  border-radius: 5px;
  display: grid;
  grid-template-columns: 35% 65%;
  color: ${white};
  font-size: 20px;
  text-align: center;

  @media (min-width: 768px) {
    border-radius: 5px 0 0 5px;
    padding: 21px 0 0;
    display: flex;
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 17px;

  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const UserName = styled.span`
  font-weight: 400;
`;

const NickName = styled.span`
  font-weight: 300;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: ${primaryColorLight};
  text-align: center;
  padding: 16px 8px;

  @media (min-width: 768px) {
    padding: 27px 16px;
  }
`;

const UserBio = styled.div`
  font-size: 14px;
  margin-bottom: 37px;
`;

const InfoList = styled.ul`
  list-style-type: none;
  margin: 0 8px;
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

  :hover {
    text-decoration: underline;
  }

  > svg {
    min-width: 14px;
    min-height: 14px;
    margin-right: 6px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
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
  UserInfo,
};
