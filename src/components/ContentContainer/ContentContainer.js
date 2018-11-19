
import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Tech from './Tech'
import Content from './Content'

class ContentContainer extends Component {
  render() {
    return (
      <Row id='ContentContainer'>
        <Content />
        <Tech />
      </Row>
    );
  }
}

export default ContentContainer;
