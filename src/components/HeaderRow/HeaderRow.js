
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PhiSymbol from './phi-symbol.png';
import Telegram from './telegram.svg';
import Github from './github2.svg';
import Steemit from './steemit.svg';

class HeaderRow extends Component {
  render() {
    return (
      <Row id='headerRow'>
        <Col md='3'>
          <img
            src={PhiSymbol}
            alt='phiguy'
            style={{ height: '128px', width: '128px' }}
          />
        </Col>
        <Col md='6'>
          <h1>I am Phi Guy</h1>
        </Col>
        <Col md='3'>
          <Row id='socialRow'>
            <Col md='4'>
              <a href='https://t.me/@PhiGuy' target='_blank' rel='noopener noreferrer'>
                <img className='socialIcon' src={Telegram} alt='telegram' />
              </a>
            </Col>
            
            <Col md='4'>
              <a href='https://github.com/phiguy' target='_blank' rel='noopener noreferrer'>
                <img className='socialIcon' src={Github} alt='github' />
              </a>
            </Col>

            <Col md='4'>
              <a href='https://steemit.com/@phi-guy' target='_blank' rel='noopener noreferrer'>
                <img className='socialIcon' src={Steemit} alt='steemit' />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default HeaderRow;
