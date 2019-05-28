import React from 'react'

export default class WaitlistForm extends React.Component{

  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <div className="container">
          <form className="col-lg-4 offset-lg-4" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group w-100">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
            </div>
            <div className="row">
              <div className="form-group w-100">
                <input type="summonerName" className="form-control" id="inputSummonerName" aria-describedby="emailHelp" placeholder="Enter Summoner Name"/>
              </div>
            </div>
            <div className="row">
              <select className="form-control col-lg-9" id="sel1">
                <option>IRON</option>
                <option>BRONCE</option>
                <option>SILVER</option>
                <option>GOLD</option>
                <option>PLATINUM</option>
                <option>DIAMOND+</option>
              </select>
              <select className="form-control col-lg-3 mb-3" id="sel2">
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
              </select>
            </div>
            <button type="submit" class="btn btn-lg btn-dark">Submit</button>

          </form>
        </div>
      );
    }
  }
