import React from 'react';
import styled from 'styled-components';

import Select from './Select';
import Socials from './Socials';
import Download from './Download';

const Info = styled.div``;

const Content = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const ContentCenter = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px 0;
`;

const Work = styled.div``;

const Hashtag = styled.div`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
`;

const Hash = styled.span`
  color: #49a144;
`;

const Link = styled.a`
  color: #fff;
  margin-bottom: 23px;
  transition: color 0.3s ease-out;

  :hover {
    color: #49a144;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  :last-of-type ${Link}:last-of-type {
    margin-bottom: 0;
  }
`;

const Copy = styled.div`
  color: #fff;
  font-size: 11px;
  margin-bottom: 24px;
`;

export default () => {
  return (
    <Info>
      <Content>
        <Work>
          <Select />
          <Hashtag>
            <Hash>#</Hash>UberEats
          </Hashtag>
          <Socials />
        </Work>
        <Links>
          <Link href="#">About UberEats</Link>
          <Link href="#">Become a Delivery Partner</Link>
          <Link href="#">Become a Restaurant Partner</Link>
        </Links>
        <Links>
          <Link href="#">See all cities</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">FAQs</Link>
        </Links>
      </Content>
      <ContentCenter>
        <Download />
      </ContentCenter>
      <Content>
        <Copy>© 2017 Uber Technologies Inc.</Copy>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
      </Content>
    </Info>
  );
};
