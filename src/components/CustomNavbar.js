import React from 'react'
import { Link } from 'react-router-dom';
export default class CustomNavbar extends React.Component {

  render() {

    return (
      <div className="bg-light nav navbar navbar-fixed-top">
        <Link className="text-dark lead" to="/">
          SNEAKYBARON.GG LOGO
        </Link>
        <Link className="text-uppercase btn btn-scattler" to="/subscriptions-closed">
          Subscribe
        </Link>
      </div>
)
 }
}
