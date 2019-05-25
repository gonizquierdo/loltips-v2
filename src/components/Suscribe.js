import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

export default class Subscribe extends React.Component{

  render() {
    return (
      <div className="information">
        <Container>
          <Row>
            <Col>
            <h2>Who we are?</h2>
              <p>We are a League of Legend players! Like yourself. We play and rank very differently, so we can say: We do know this game. We work hard to get better every day so we think that's something we need to share.</p>
            </Col>
            <Col>
              <h2>What we provide?</h2>
              <p>We want you to have a short, quick and pretty version of all the data we gather through research. Improved with all our team's insights, knowledge and opinions.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
