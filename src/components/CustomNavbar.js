import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

import { t } from '../i18n.js'

import logo from '../assets/resources/logo.png'

class CustomNavbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {

    return (
      <nav className="navbar-light navbar-expand-lg bg-dark-transparent navbar lead">
        <NavLink className="text-dark font-weight-light navbar-brand logo" to="/">
          <img
            src={logo}
            alt="Sneakybaron logo"
            width={250}
            />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={"nav-amumu nav-item " + this.getNavLinkClass("/")}>
              <NavLink exact to="/" className="nav-link">{t('navbar.patch_highlights')}</NavLink>
            </li>
            {/*
            <li className={"nav-item " + this.getNavLinkClass("/about-us")}>
              <NavLink to="/about-us" className="nav-link">{t('navbar.about_us')}</NavLink>
            </li>
            <li className={"nav-item " + this.getNavLinkClass("/join-team")}>
              <NavLink to="/join-team" className="nav-link">{t('navbar.join_team')}</NavLink>
            </li>
            */}
          </ul>
        </div>

      </nav>
    )
 }
}

CustomNavbar = withRouter(CustomNavbar);
export default CustomNavbar;
