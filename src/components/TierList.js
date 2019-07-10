import React from 'react'
import { t } from '../i18n.js'

import { getChampionsTiles, getTopChampionsForLeague, getRoleIcons } from '../utils.js'

export default class TierList extends React.Component
{
  props: {
    patch: 'string',
    league: 'string'
  }


  render() {

    const { patch, league } = this.props
    const tiles = getChampionsTiles()
    const roles = ['top', 'jg', 'mid', 'adc', 'sup']
    const role_icons = getRoleIcons()

    const top_champions = getTopChampionsForLeague(patch, league)

    return (
      <div className='container info-panel'>

        <h2 className="border-blue-3"> {t('tier_list.top_champions_title')}</h2>
        <p> {t('tier_list.top_champions_intro')} {patch}. {t('tier_list.top_champions_text')}</p>
        <div className="row tier-images">
          {
            roles.map((role, index) =>
              <div key={index} className="col">
                <img
                  width={64}
                  height={64}
                  className="mr-1 mb-1"
                  src={role_icons[role]}
                  alt={'top'}
                />
                <div>
                {
                  top_champions[role].map((champ, index) =>

                  <img
                    key={index}
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
