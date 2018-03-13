import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';

const Wrapper = styled.div`
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default App;
