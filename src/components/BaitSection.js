import React from 'react'
import { Link } from 'react-router-dom';

export default class BaitSection extends React.Component{

  render() {
    return (
      <div className="container pt-3">
        <div className="bg-dark-transparent pb-3">
          <h1 className="display-4">Did you find this information <strong> Useful</strong>?</h1>
          <p className="lead">You can receive advise on your specific champions and league.</p>
          <p>Subscribe now and receive periodic updates to keep up with League of Legends.</p>
          <Link to="/premium-content" className="btn btn-scattler btn-lg text-uppercase">Learn more</Link>
        </div>
      </div>
    )
  }

}
