import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Search from './Search';
import Main from './Main';

const Wrapper = styled.div`
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Search />
        <Main />
      </Wrapper>
    );
  }
}

export default App;
