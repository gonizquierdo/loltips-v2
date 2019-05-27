import React from 'react'
import { Link } from 'react-router-dom';

export default class BaitSection extends React.Component{

  render() {
    return (
      <div className="container pb-3 pt-3t">
        <h1 className="display-4">Useful?</h1>
        <p className="lead">You can receive advise on your specific champions and league.</p>
        <p>Subscribe now and receive periodic updates to keep up with League of Legends.</p>
        <Link to="/subscribe" className="btn btn-primary btn-lg" >SUBSCRIBE</Link>
      </div>
    )
  }

}
