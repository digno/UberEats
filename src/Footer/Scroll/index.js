import React from 'react';
import styled from 'styled-components';

import arrow from './arrow.svg';

const Scroll = styled.a`
  background: #59bd5a;
  border-radius: 2px;
  width: 64px;
  height: 64px;
  position: absolute;
  bottom: 24px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Scroll href="#">
      <img src={arrow} alt="arrow" />
    </Scroll>
  );
};
