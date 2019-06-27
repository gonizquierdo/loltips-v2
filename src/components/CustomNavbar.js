import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';

export default class CustomNavbar extends React.Component {
  
  getNavLinkClass = (path) => {
          return this.props.location.pathname === path ? 'active' : '';

  render() {

    return (
      <nav className="navbar-light navbar-expand-lg bg-light navbar navbar-fixed-top">
        <Link className="text-dark font-weight-light navbar-brand logo" to="/">
          SNEAKY<b className="text-amumu">BARON</b>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Patch highlights</a>
            </li>
           <li className="nav-item">
             <a className="nav-link" href="#">About us</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Join the team</a>
           </li>
          </ul>
        </div>

      </nav>
)
 }
}
