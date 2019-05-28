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
        <h1 className="text-uppercase p-2 display-4">Patch <b>{patch}</b></h1>
        <div className="container">
          <div className="row current-patch-content shadow p-3 mb-3 bg-white rounded">
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
