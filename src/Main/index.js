import React from 'react';
import styled from 'styled-components';

import List from './List';

const Main = styled.main`
  margin: 40px 0 36px 0;
`;

const Title = styled.h1`
  line-height: 34px;
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 14px;
`;

export default () => {
  return (
    <Main>
      <div className="container">
        <Title>Moscow Restaurants</Title>
        <List />
      </div>
    </Main>
  );
};
