import React from 'react'
import { t } from '../i18n.js'

import { getChampionsTiles, getRoleIcons } from '../utils.js'

export default class TierList extends React.Component
{
  props: {
    patch: 'string',
    patch_data: Object,
    league: 'string'
  }

  renderTopChampions(top_champions) {

    const tiles = getChampionsTiles()
    const roles = ['top', 'jg', 'mid', 'adc', 'sup']
    const role_icons = getRoleIcons()
    const { league  } = this.props
    return (
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
                  top_champions[league][role].map((champ, index) =>
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
    )
  }

  render() {

    const { patch, patch_data } = this.props

    return (
      <div className='container info-panel'>
        <h2 className="border-amumu-3"> {t('tier_list.top_champions_title')}</h2>
        <p> {t('tier_list.top_champions_intro')} {patch}. {t('tier_list.top_champions_text')}</p>

        {
          this.renderTopChampions(patch_data.top_champions)
        }

      </div>
    )
  }
}
