import React from 'react'
import axios from 'axios'

import { t, locale } from '../i18n.js'
import { getLeagueIcons, getPatchData } from '../utils.js'

import TierList from './TierList'
import PatchNotes from './PatchNotes'
import WaitSpinner from './WaitSpinner'


export default class MainPatchInfo extends React.Component
{
  props: {
    patch: 'string'
  }

  constructor(props) {
      super(props);
      this.state = {
        league_value: 'gold',
        patch_data: {}
      };
      this.handleLeagueChange = this.handleLeagueChange.bind(this);
  }

  componentDidMount() {
    axios.get('https://sneaky-static-data.s3.us-east-2.amazonaws.com/parches_new/'+locale()+'/'+this.props.patch.split(".").join("")+'.json')
    .then(response => {
      let json = response.data.lol
      this.setState({ patch_data: json })
    })
  }

  handleLeagueChange(league){
    this.setState({league_value: league})
  }

  renderComponents() {
    const { patch } = this.props
    const { league_value, patch_data } = this.state
    return(
      <div className="row current-patch-content">
        <div className="col">
          <TierList patch={patch} patch_data={patch_data} league={league_value}/>
        </div>
        <div className="col">
          <PatchNotes patch={patch} patch_data={patch_data} />
        </div>
      </div>
    )
  }
  render() {
    const { patch } = this.props
    const { league_value, patch_data } = this.state
    const league_icons = getLeagueIcons();
    const leagues = ['iron', 'bronze', 'silver', 'gold', 'platinum', 'diamond']
    return (
      <div className="pt-3">
        <div className="tab p-1 pl-4 text-light bg-dark-new">
          <div className="row">
            <p className="text-uppercase m-0 pl-4 pr-4 col col-8">{t('main_patch.current_patch')}: <b className="text-blue-new">{patch} </b></p>
            <div className="btn-group dropdown col col-2">
              <button className="btn btn-outline-secondary dropdown-toggle bg-light p-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                src={league_icons[league_value]}
                width={30}
                height={30}
                alt={league_value}/>
              </button>
              <div className="dropdown-menu">
                {
                  leagues.map((league, index) =>
                    <span key={index} className="dropdown-item" onClick={() => this.handleLeagueChange(league)} style={{cursor: 'pointer'}}>
                      <img
                        src={league_icons[league]}
                        width={30}
                        height={30}
                        alt={league}/>
                        <span className="text-uppercase"> {league} </span>
                    </span>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="shadow mt-0 p-3 bg-dark-new text-light rounded-right rounded-bottom text-justify">
            {
              Object.keys(patch_data).length ? this.renderComponents() : (<WaitSpinner/>)
            }
          <hr className="border-light"></hr>
          <small className="font-italic text-muted">{t("main_patch.sources")}</small>
        </div>
      </div>
    )
  }
}
