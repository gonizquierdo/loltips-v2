import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

import TierList from './TierList'
import PatchNotes from './PatchNotes'

export default class MainPatchInfo extends React.Component
{
  props: {
    patch: 'string'
  }

  render() {
    const { patch } = this.props
    return (
      <div className='main-patch'>
        <h1>Patch {patch} insights</h1>
        <Container>
          <Row>
            <Col lg="6">
              <TierList patch={patch} />
            </Col>
            <Col>
              <PatchNotes patch={patch} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
