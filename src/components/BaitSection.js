import React from 'react'
import { Link } from 'react-router-dom';

export default class BaitSection extends React.Component{

  render() {
    return (
      <div className="container pt-3">
        <div className="bg-dark-transparent pb-3">
          <h1 className="display-4 text-uppercase">Was it <strong className="text-amumu"> Useful?</strong></h1>
          <p className="lead"> We want you to keep up with what's important <b>without</b> having to go through multiple online sources</p>
          <div className="container pt-3 pb-2">
            <div className="row">
              <div className="col">
                <h2 className="text-uppercase"> Why we do this </h2>
                <p className="text-justify">Beeing aware of everything that's happening in League of Legends can be a time consuming job. There's a lot of great information online but it's spread all over different sources. We want <b>you</b> to have access to the most important changes in the game in an easy way <b>without</b> having to go through multiple online sources.</p>
              </div>
              <div className="col">
                <h2 className="text-uppercase"> Our data sources </h2>
                <p className="text-justify">At <b>SNEAKYBARON</b> we harvest data from a great number of public websites and Youtube channels. We keep up with Professional players and official information so we can bring the latest news to our feed. We combine it with our knowledge and passion to make it the most valuable to our users!</p>
              </div>
            </div>
          </div>
          <p className="lead"> <b>Subscribe</b> now and receive periodic updates to keep up with League of Legends on your specific champions and league.</p>
          <Link to="/premium-content" className="btn btn-scattler btn-lg text-uppercase">Learn more</Link>
        </div>
      </div>
    )
  }

}
