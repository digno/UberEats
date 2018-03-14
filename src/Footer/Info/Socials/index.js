import React from 'react';
import styled from 'styled-components';

import list from './socialsList';

const Socials = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Social = styled.a`
  margin-right: 15px;
`;

export default () => {
  const socials = list.map(social => {
    return (
      <Social href="">
        <img src={social} alt="social" />
      </Social>
    );
  });

  return <Socials>{socials}</Socials>;
};
