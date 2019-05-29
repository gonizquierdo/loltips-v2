import React from 'react'
import { Link } from 'react-router-dom';

export default class PremiumContent extends React.Component{

  render() {

    return (
      <div className="container">
        <h1 className="display-4 text-uppercase"> Not just data. <b>Insights</b> </h1>
        <div style={{height: "200px"}}>
        </div>
        <Link to="/subscriptions-closed" className="btn btn-scattler btn-lg text-uppercase">Subscribe</Link>

      </div>
    )
  }

}
