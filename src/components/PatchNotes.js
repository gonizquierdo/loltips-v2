import React from 'react'
import { getBuffsList, getNerfsList, getUpdatesList } from '../utils.js'

export default class PatchNotes extends React.Component
{
  props: {
    patch: 'string'
  }

  render() {
    const { patch } = this.props
    return(
      <div className='container info-panel'>
        <h2 className="border-amumu-3"> Important highlights </h2>
        <div>
          <p> Even if this is not everything that has happened in patch {patch}, it summarizes the most important things you have to consider to take advantage of the current changes. </p>
        </div>

        <div>
          <h4> Dangerous buffs </h4>
          <ul>
          {
            getBuffsList(patch).map((buff, index) =>
              <li key={index}>{buff}</li>
            )
          }
          </ul>
          <h4> Killer nerfs </h4>
            <ul>
            {
              getNerfsList(patch).map((nerf, index) =>
                <li key={index}>{nerf}</li>
              )
            }
            </ul>
          <h4> Updates and changes </h4>
            <ul>
            {
              getUpdatesList(patch).map((update, index) =>
                <li key={index}>{update}</li>
              )
            }
            </ul>
        </div>
        <div className="text-center w-100">
            <a href="https://las.leagueoflegends.com/es/news/game-updates/patch/notas-de-la-version-913" target="_new">
              <button type="button" class="btn btn-scattler">View official patch notes</button>
            </a>
        </div>
      </div>
    )
  }
}
