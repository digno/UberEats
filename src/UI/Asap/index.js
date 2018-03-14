import React from 'react';
import styled from 'styled-components';

const Content = styled.div``;

const Info = styled.div`
  font-size: 11px;
  color: #626262;
  margin-bottom: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  text-transform: uppercase;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  margin-right: 16px;
  background-color: #fff;
  line-height: 24px;
`;

export default () => {
  return (
    <Content>
      <Info>When</Info>
      <Button>Asap</Button>
    </Content>
  );
};
