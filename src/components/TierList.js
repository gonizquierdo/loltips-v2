import React from 'react'
import { Media } from 'react-bootstrap'
import { getChampionsTiles, getTopChampions, getRoleIcons } from '../utils.js'

export default class TierList extends React.Component
{
  props: {
    patch: 'string'
  }


  render() {

    const { patch } = this.props
    const tiles = getChampionsTiles()
    const roles = ['top', 'jg', 'mid', 'adc', 'sup']
    const role_icons = getRoleIcons()

    const top_champions = getTopChampions(patch)

    return (
      <div className='container info-panel'>

        <h2> Champions Tier list </h2>
        <p> These are the best champions in patch {patch}. Although it is not a certain win, playing champions that are strong in the current meta can give you an advantage over your opponent.</p>
        <div className="row">
          {
            roles.map(role =>
              <div className="col">
                <img
                  width={64}
                  height={64}
                  className="mr-1 mb-1"
                  src={role_icons[role]}
                  alt={'top'}
                />
                <div>
                {
                  top_champions[role].map(champ =>

                  <img
                    width={64}
                    height={64}
                    className="mr-1 mb-1"
                    src={tiles[champ]}
                    title={champ}
                    alt={champ}
                  />
                  )
                }
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
