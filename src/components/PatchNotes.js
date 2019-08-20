import React from 'react'
import { t , locale } from '../i18n.js'

export default class PatchNotes extends React.Component
{
  props:  {
    patch: 'string',
    patch_data: Object
  }

  get_link_for_language(){
    const lang = locale();
    const { patch } = this.props
    const patch_code = patch.split('.').join('')
    if (lang === 'en') {
      return 'https://na.leagueoflegends.com/en/news/game-updates/patch/patch-'+ patch_code +'-notes';
    }
    else {
      return 'https://las.leagueoflegends.com/es/news/game-updates/patch/notas-de-la-version-' + patch_code;
    }
  }

  render() {
    const { patch_data } = this.props
    return(
      <div className="info-panel">
        <h2 className="border-blue-3">{t('patch_notes.important_highlights')}</h2>
        <div>
          <p>{t('patch_notes.summary')}</p>
        </div>

        <div>
          <h4> {t('patch_notes.dangerous_buffs')}</h4>
          <ul>
          {
            patch_data.buffs.map((buff, index) =>
              <li key={index}>{buff}</li>
            )
          }
          </ul>
          <h4> {t('patch_notes.killer_nerfs')}</h4>
            <ul>
            {
              patch_data.nerfs.map((nerf, index) =>
                <li key={index}>{nerf}</li>
              )
            }
            </ul>
          <h4> {t('patch_notes.updates')}</h4>
            <ul>
            {
              patch_data.updates.map((update, index) =>
                <li key={index}>{update}</li>
              )
            }
            </ul>
        </div>
        <div className="text-center w-100">
            <a href={this.get_link_for_language()} target="_new">
              <button type="button" className="btn btn-scattler">{t('patch_notes.official_notes')}</button>
            </a>
        </div>
      </div>
    )
  }
}
