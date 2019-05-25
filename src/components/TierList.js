import React from 'react'
import { Media } from 'react-bootstrap'
import { getChampionsTiles, getChampionsTiers } from '../utils.js'

export default class TierList extends React.Component
{
  props: {
    patch: 'string'
  }

  render() {

    const { patch } = this.props
    const tiles = getChampionsTiles()
    const tiers = getChampionsTiers(patch)

    return (
      <div className='container info-panel'>

        <h2> Champions Tier list </h2>
        <p> This are the champion tiers for patch {patch}. Although it is not a certain win, playing champions that are strong in the current meta can give you an advantage over your opponent.</p>

        <div className="tier">
          <h4> God champs </h4>
          <p> These champs are super strong, probably unbalanced. If you main one of these, this is your time to farm the LP.</p>

          <div className="wrapped">
          {tiers['s'].map(champ =>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-1 mb-1"
                src={tiles[champ]}
                alt={champ}
              />
            </Media>
          )
          }
          </div>
        </div>

        <div className="tier">
          <h4> Awesome champs </h4>
          <p>Very strong champions! Consider these as strong picks that could be among the best champions in any moment.</p>

          <div className="wrapped">
          {tiers['a'].map(champ =>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-1 mb-1"
                src={tiles[champ]}
                alt={champ}
              />
            </Media>
          )
          }
          </div>
        </div>

        <div className="tier">
          <h4> Cool strong champs </h4>
          <p> Not bad at all. Playing with one of these champions is still a good choice.</p>

          <div className="wrapped">
          {tiers['b'].map(champ =>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-1 mb-1"
                src={tiles[champ]}
                alt={champ}
              />
            </Media>
          )
          }
          </div>
        </div>
      </div>
    )
  }

}
