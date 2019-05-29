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
      <div className='main-patch container mt-2'>
        <div className="tab bg-dark-transparent p-1">
          <p className="text-uppercase m-0">Current patch: <b className="text-amumu">{patch}</b></p>
        </div>
        <div className="shadow mt-0 mb-3 p-3 bg-dark-transparent text-light rounded-right rounded-bottom">
          <div className="row current-patch-content">
            <div className="col">
              <TierList patch={patch} />
            </div>
            <div className="col">
              <PatchNotes patch={patch} />
            </div>
          </div>
        </div>

      </div>
    )
  }

}
