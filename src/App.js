import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Search from './Search';

const Wrapper = styled.div`
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Search />
      </Wrapper>
    );
  }
}

export default App;
