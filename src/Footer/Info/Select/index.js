import React from 'react';
import styled from 'styled-components';

import select from './select.svg';
import world from './world.svg';

const Content = styled.div`
  position: relative;
  display: inline-flex;
  margin-bottom: 32px;
`;

const World = styled.img`
  position: absolute;
  top: 12px;
  left: 25px;
  z-index: 1;
`;

const Select = styled.select`
  background: #3b3b3b;
  border: none;
  color: #fff;
  text-transform: uppercase;
  border-radius: 2px;
  padding: 12px 71px 12px 48px;
  position: relative;
  -webkit-appearance: none;
  cursor: pointer;
`;

const Down = styled.img`
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 15px;
`;

export default () => {
  return (
    <Content>
      <World src={world} />
      <Select>
        <option>English</option>
        <option>Russian</option>
      </Select>
      <Down src={select} />
    </Content>
  );
};
