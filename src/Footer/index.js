import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import Info from './Info';
import Scroll from './Scroll';

const Footer = styled.footer`
  background: #262626;
  padding: 56px 0 40px 0;
  position: relative;
`;

const Logo = styled.a`
  margin-bottom: 40px;
  display: block;
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <Logo href="#">
          <img src={logo} alt="logo" />
        </Logo>
        <Info />
      </div>
      <Scroll />
    </Footer>
  );
};
