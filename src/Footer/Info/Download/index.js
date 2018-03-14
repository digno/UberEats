import React from 'react';
import styled from 'styled-components';

import app from './app.png';
import google from './google.png';

const Download = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  margin-right: 24px;

  :last-of-type {
    margin-right: 0;
  }
`;

export default () => {
  return (
    <Download>
      <Link href="#">
        <img src={app} alt="app" />
      </Link>
      <Link href="#">
        <img src={google} alt="google" />
      </Link>
    </Download>
  );
};
