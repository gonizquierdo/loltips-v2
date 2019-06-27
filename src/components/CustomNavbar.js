import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';

class CustomNavbar extends React.Component {

  getNavLinkClass = (path) => {
          return this.props.location.pathname === path ? 'active' : '';}

  render() {

    return (
      <nav className="navbar-light navbar-expand-lg bg-light navbar navbar-fixed-top">
        <NavLink className="text-dark font-weight-light navbar-brand logo" to="/">
          SNEAKY<b className="text-amumu">BARON</b>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={"nav-item " + this.getNavLinkClass("/")}>
              <NavLink exact to="/" className="nav-link">Patch highlights</NavLink>
            </li>
            <li className={"nav-item " + this.getNavLinkClass("/about-us")}>
              <NavLink to="/about-us" className="nav-link">About us</NavLink>
            </li>
            <li className={"nav-item " + this.getNavLinkClass("/join-team")}>
              <NavLink to="/join-team" className="nav-link">Join the team</NavLink>
            </li>
          </ul>
        </div>

      </nav>
    )
 }
}

CustomNavbar = withRouter(CustomNavbar);
export default CustomNavbar;

