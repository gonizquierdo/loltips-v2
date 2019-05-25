import React from 'react'

export default class PatchNotes extends React.Component
{
  props: {
    patch: 'string'
  }

  render() {
    const { patch } = this.props
    return(
      <div className='container info-panel'>
        <div>
          <h2> Patch notes highlights </h2>
        </div>
        <div>
          <p> Even if this is not everything that has happened in patch {patch}, it summarizes the most important things you have to consider to take advantage of the current changes. </p>
        </div>

        <div>
          <h4> Important buffs </h4>
            <ul>
              <li> buff del culo </li>
              <li> buff del culo </li>
              <li> buff del culo </li>
              <li> buff del culo </li>
            </ul>
          <h4> Important nerfs </h4>
            <ul>
              <li> buff del culo </li>
              <li> buff del culo </li>
              <li> buff del culo </li>
            </ul>
          <h4> Updates and changes </h4>
            <ul>
              <li> buff del culo </li>
              <li> buff del culo </li>
              <li> buff del culo </li>
              <li> buff del culo </li>
              <li> buff del culo </li>
            </ul>
        </div>
      </div>
    )
  }
}