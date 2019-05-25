import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

import TierList from './TierList'

export default class MainPatchInfo extends React.Component
{
  render() {
    return (
      <div className='main-patch'>
        <h2> Lo dato</h2>
        <Container>
          <Col lg="6">
            <TierList/>
          </Col>
          <Col>
          </Col>
        </Container>
      </div>
    )
  }

}
