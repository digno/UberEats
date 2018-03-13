import React from 'react';
import styled from 'styled-components';

import loupe from './loupe.svg';

const Search = styled.section`
  margin-top: 40px;
`;

const Content = styled.div`
  border-bottom: 1px solid rgba(117, 117, 177, 0.3);
  padding-bottom: 15px;
  display: flex;
`;

const Loupe = styled.img`
  margin-right: 8px;
`;

const Input = styled.input`
  width: 100%;
  border: none;

  ::placeholder {
    color: #626262;
    opacity: 0.5;
  }
`;

export default () => {
  return (
    <Search>
      <div className="container">
        <Content>
          <Loupe src={loupe} />
          <Input
            type="text"
            placeholder="Search for restaurant or cuisine"
            maxLength="30"
          />
        </Content>
      </div>
    </Search>
  );
};
