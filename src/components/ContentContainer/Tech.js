
import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Tech extends Component {
  render() {
    return (
      <Col md='3' id='ourTech'>
        <h2>Our Tech</h2>
        <hr />
        <h3>Alice</h3>
        <ul>
          <li>Seed: <span>Coming ...</span></li>
          <li>API:&nbsp;
              <a rel='noopener noreferrer' target='_blank' href='http://52.59.217.195:8010/isalive'>ws://35.159.10.69:8090</a>
          </li>
          <li>BOS: <span>Coming ...</span></li>
          <li><b>Name: </b>phi-guy</li>
          <li><b>ID: </b>1.6.79</li>
        </ul>

        <hr />
        <h3>Beatrice</h3>
        <ul>
          <li>Seed: <span>Coming ...</span></li>
          <li>API:&nbsp;
            <a rel='noopener noreferrer' target='_blank' href='http://52.59.217.195:8090'>http://52.59.217.195:8090</a>
          </li>
          <li>BOS:&nbsp;
              <a rel='noopener noreferrer' target='_blank' href='http://52.59.217.195:8010/isalive'>http://52.59.217.195:8010/isalive</a>
          </li>
          <li><b>Name: </b>phi-guy</li>
          <li><b>ID: </b>1.6.26</li>
        </ul>
      </Col>
    );
  }
}

export default Tech;
