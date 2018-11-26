
import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Content extends Component {
  render() {
    return (
      <Col md='9' id='content'>
        <section>
          <h3>Who am I ?</h3>
          <p>
            
            I am Phi Guy. I believe Blockchain has very specific use cases.

            One of which, is taking corruption out of spaces where corruption tends to be.

            <br /><br />

            I joined the world of blockchain in 2012 by purchasing Bitcoin. BitShares caught my eye a short time later.

            <br /><br />

            I have been developing my own trading bots, interfaces, algorthms and personal projects to better help me understand the markets, ecosystem and blockchain in the world as a whole. 
      
            <br /><br />

            I am ready to devote a portion of my time to maintaining a witness for the PeerPlays blockchain in the name of a better future.

            <br /><br />

            I am a full stack developer who loves having their hand in every part of the system.
          </p>
        </section>

        <hr />

        <section>
          <h3>Why Am I Here ?</h3>
          <p>
            I am Phi Guy

            <br /><br />

            I took an interest in the <a rel="noopener noreferrer" href='https://www.peerplays.com' target='_blank'>PeerPlays</a> project in June of 2018. 

            <br /><br />

            Provably fair gambling is one of the areas that blockchain has a real use case for.

            <br /><br />
            
            After doing our initial research and analysis on the platform, 
            I have decided to become witnesses on the blockchain. 

            <br /><br />

            With the help of you, the voter, 
            we can create a proper blockchain, 
            one that is empowered by the community.
          </p>
        </section>

        <hr />

        <section>
          <h3>Why Vote for Me ?</h3>

          <p>

            <h4>I Have ... </h4>
            <ul>
              <li>Conducted sufficient research to reduce the barrier to entry before making myself known.</li>
              <li>Demonstrated my ability to keep up with the software (BOS)</li>
              <li>Invested a portion of my portfolio in PeerPlays</li>
              <li>A wide array of skills that the PeerPlays community can take advantage of</li>
            </ul>

            <h4>I Will ...</h4>
            <ul>
              <li>Maintain a Full Node ( Witness, Seed, API, BOS )</li>
              <li>Maintain a node on the main net and the testnet</li>
              <li>Respond to issues in a reasonable amount of time</li>
              <li>Participate in the open sourced codebases such as the <a rel="noopener noreferrer" href='https://github.com/PBSA/peerplays-core-gui' target='_blank'>Peerplays Wallet</a>
              </li>
            </ul>
          </p>
        </section>
      </Col>
    );
  }
}

export default Content;
