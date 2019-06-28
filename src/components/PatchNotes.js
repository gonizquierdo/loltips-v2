import React from 'react'
import { t } from '../i18n.js'

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
        <h2 className="border-amumu-3">{t('patch_notes.important_highlights')}</h2>
        <div>
          <p>{t('patch_notes.summary')}</p>
        </div>

        <div>
          <h4> {t('patch_notes.dangerous_buffs')}</h4>
          <ul>
          {
            getBuffsList(patch).map((buff, index) =>
              <li key={index}>{buff}</li>
            )
          }
          </ul>
          <h4> {t('patch_notes.killer_nerfs')}</h4>
            <ul>
            {
              getNerfsList(patch).map((nerf, index) =>
                <li key={index}>{nerf}</li>
              )
            }
            </ul>
          <h4> {t('patch_notes.updates')}</h4>
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
              <button type="button" class="btn btn-scattler">{t('patch_notes.official_notes')}</button>
            </a>
        </div>
      </div>
    )
  }
}
