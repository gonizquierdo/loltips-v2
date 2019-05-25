import React from 'react'

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
        <h1 className="current-patch">Patch {patch}</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <TierList patch={patch} />
            </div>
            <div className="col">
              <PatchNotes patch={patch} />
            </div>
          </div>
        </div>
        <div className="bait">
        </div>
      </div>
    )
  }

}
