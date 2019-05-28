import React from 'react'

export default class WaitlistForm extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
        email: 'Enter a valid email',
        summoner_name: 'Enter your Summoner Name',
        region_value: 'NA',
        division_value: '1',
        league_value: 'Gold'
      };

      this.handleRegionChange = this.handleRegionChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSummonerNameChange = this.handleSummonerNameChange.bind(this);
      this.handleDivisionChange = this.handleDivisionChange.bind(this);
      this.handleLeagueChange = this.handleLeagueChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRegionChange(event){
      this.setState({region_value: event.target.value})
    }

    handleDivisionChange(event){
      this.setState({division_value: event.target.value})
    }

    handleLeagueChange(event){
      this.setState({league_value: event.target.value})
    }

    handleSummonerNameChange(event){
      this.setState({summoner_name: event.target.value})
    }

    handleEmailChange(event){
      this.setState({email: event.target.value})
    }


    handleSubmit(event) {
      event.preventDefault();
    }

    render() {
      const leagues = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond+']
      const regions = ['BR', 'EUNE', 'EUW', 'LAN', 'LAS', 'NA', 'OCE', 'RU', 'TR', 'JP', 'SEA', 'KR', 'CN']
      return (
        <div className="container">
          <form className="col-lg-4 offset-lg-4" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group w-100">
                <input required type="email" className="form-control" id="inputEmail1" onChange={this.handleEmailChange} placeholder={this.state.email}/>
              </div>
            </div>
            <div className="row">
              <div className="form-group w-100">
                <input required type="summonerName" className="form-control" id="inputSummonerName" onChange={this.handleSummonerNameChange} placeholder={this.state.summoner_name}/>
              </div>
            </div>
            <div className="row">
              <select value={this.state.region_value} onChange={this.handleRegionChange} className="form-group form-control" id="sel1">
              {
                regions.map((region, index) =>
                 <option value={region} key={index}>{region}</option>
                )
              }
              </select>
            </div>
            <div className="row">
              <select value={this.state.league_value} onChange={this.handleLeagueChange} className="form-control col-lg-9" id="sel2">
              {
                leagues.map((league, index) =>
                 <option value={league} key={index}>{league}</option>
                )
              }
              </select>
              <select value={this.state.division_value} onChange={this.handleDivisionChange} className="form-control col-lg-3 mb-3" id="sel3">
                <option value='1'>I</option>
                <option value='2'>II</option>
                <option value='3'>III</option>
                <option value='4'>IV</option>
              </select>
            </div>
            <button type="submit" className="btn btn-lg btn-dark">Submit</button>

          </form>
        </div>
      );
    }
  }
