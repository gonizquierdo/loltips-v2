import React from 'react'

import TierList from './TierList'
import PatchNotes from './PatchNotes'

import { getLeagueIcons } from '../utils.js'

export default class MainPatchInfo extends React.Component
{
  props: {
    patch: 'string'
  }

  constructor(props) {
      super(props);
      this.state = {
        league_value: 'gold'
      };
      this.handleLeagueChange = this.handleLeagueChange.bind(this);
  }

  handleLeagueChange(league){
    this.setState({league_value: league})
  }

  render() {
    const { patch } = this.props
    const { league_value } = this.state
    const league_icons = getLeagueIcons();
    const leagues = ['iron', 'bronze', 'silver', 'gold', 'platinum', 'diamond']
    return (
      <div className='main-patch container pt-3'>
        <div className="tab bg-dark-transparent p-1 pl-2">
          <div className="row">
            <p className="text-uppercase m-0 pl-4 pr-4">Current patch: <b className="text-amumu">{patch} </b></p>
            <div className="btn-group dropdown">
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
        <div className="shadow mt-0 mb-3 p-3 bg-dark-transparent text-light rounded-right rounded-bottom">
          <div className="row current-patch-content">
            <div className="col">
              <TierList patch={patch} league={league_value} />
            </div>
            <div className="col">
              <PatchNotes patch={patch} />
            </div>
          </div>
        </div>

      </div>
    )
  }

}
