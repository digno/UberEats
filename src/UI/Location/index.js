import React from 'react';
import styled from 'styled-components';

import location from './location.svg';

const Content = styled.div`
  flex: 1;
`;

const Location = styled.input`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding: 8px 10px 8px 35px;
  position: relative;
  width: 100%;
  line-height: 24px;
`;

const Info = styled.div`
  font-size: 11px;
  color: #626262;
  margin-bottom: 8px;
`;

const Search = styled.div`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    background: url(${location}) no-repeat;
    width: 14px;
    height: 15px;
    top: 13px;
    left: 14px;
  }
`;

export default () => {
  return (
    <Content>
      <Info>To</Info>
      <Search>
        <Location type="text" placeholder="ul. Bolshaya Dmitrovka,22 " />
      </Search>
    </Content>
  );
};
