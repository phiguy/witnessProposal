import React, { Component } from 'react';
import { Container } from 'reactstrap';

import HeaderRow from './components/HeaderRow/HeaderRow';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Container>
        <HeaderRow />
        <ContentContainer />
        <Footer />
      </Container>
    );
  }
}

export default App;
