import React from 'react';
import { t, locale } from '../i18n.js';
import { getPatchData } from '../utils.js';
import icon from '../assets/TTF_Items.png';
import { Link, Route, Switch } from 'react-router-dom';


export default class TeamfightTactics extends React.Component {
  props: {
      patch: 'string'
  }

  constructor(props) {
      super(props);
      this.state = {
        showing: 'sheet',
      };
      this.setView = this.setView.bind(this);
  }

  setView(view){
    console.log(view)
    this.setState({showing: view})
  }

  get_link_for_language() {
      const lang = locale();
      if (lang === 'en') {
          return 'https://na.leagueoflegends.com/en/news/game-updates/patch/teamfight-tactics-915-notes';
      }
      else {
          return 'https://las.leagueoflegends.com/es/news/game-updates/patch/notas-de-la-version-915-de-teamfight-tactics';
      }
  }

  render_notes_component() {
      const link = this.get_link_for_language()
      const { patch } = this.props
      const patch_data = getPatchData("915");
      return (
          <div className="info-panel">
              <h2 className="border-blue-3">Patch Notes</h2>
              <div>
                  <p>{t('patch_notes.summary')}</p>
              </div>

              <div>
                  <h4> {t('patch_notes.tactical_buffs')}</h4>
                  <ul>
                      {
                          patch_data.tft.buffs.map((buff, index) =>
                              <li key={index}>{buff}</li>
                          )
                      }
                  </ul>
                  <h4> {t('patch_notes.strategic_nerfs')}</h4>
                  <ul>
                      {
                          patch_data.tft.nerfs.map((nerf, index) =>
                              <li key={index}>{nerf}</li>
                          )
                      }
                  </ul>
                  <h4> {t('patch_notes.tft_updates')}</h4>
                  <ul>
                      {
                          patch_data.tft.updates.map((update, index) =>
                              <li key={index}>{update}</li>
                          )
                      }
                  </ul>
              </div>
              <div className="text-center w-100">
                  <a href={link} target="_new">
                      <button type="button" className="btn btn-scattler">{t('patch_notes.official_notes')}</button>
                  </a>
              </div>
          </div>
      )
  }

  render_sheet_component() {
      return (
          <div className="info-panel">
              <h2 className="border-blue-3">Cheat Sheet</h2>
              <p>{t('cheatsheet')}</p>
              <img src={icon} className="mt-2 img-fluid rounded" alt="cheatsheet" data-toggle="tooltip" data-placement="top" title="TFT CheatSheet" />
          </div>
      )
  }

  render() {
    const { showing } = this.state
    return (
        <div className="container mt-3 mb-3">
          <div className="shadow p-3 bg-dark-new text-light rounded-right rounded-bottom text-justify">
            <div className="row links pt-1 align-self-start p-1">
              <button className="col-auto btn" onClick={() => this.setView('sheet')}><h5>CheatSheet</h5></button>
              <button className="col-auto btn" onClick={() => this.setView('notes')}><h5>Patch Notes</h5></button>
            </div>
            {
              showing === 'sheet' ? this.render_sheet_component() : this.render_notes_component()
            }
          </div>
        </div>
    )
  }

}
