import React from 'react';
import styled from 'styled-components';

import loupe from './loupe.svg';
import Asap from '../UI/Asap';
import Location from '../UI/Location';

const Search = styled.section`
  margin-top: 40px;
`;

const Content = styled.div`
  border-bottom: 1px solid rgba(117, 117, 177, 0.3);
  padding-bottom: 10px;
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 24px;
`;

const Loupe = styled.img`
  margin-right: 8px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  line-height: 24px;

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
        <Buttons>
          <Asap />
          <Location />
        </Buttons>
      </div>
    </Search>
  );
};
