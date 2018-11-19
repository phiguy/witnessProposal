
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Col id='footer' md='12'>
        <Row id='footerContent'>
          <Col md='4'>
            <h4>Now Vote!</h4>
          </Col>

          <Col md='4'>
            <h4>Name: phi-guy</h4>
          </Col>

          <Col md='4'>
            <h4>ID: 1.6.79</h4>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Footer;
