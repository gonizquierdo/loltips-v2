import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

import { t } from '../i18n.js'

import logo from '../assets/logo_letras.png'

class CustomNavbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {

    return (
  <nav className="navbar bg-dark-new navbar-expand-lg text-uppercase fixed-top ">
    <div className="container">
      <img src={logo} width="250" className="navbar-brand js-scroll-trigger" alt="Sb logo leters"/>
    </div>
  </nav>
    )
 }
}

CustomNavbar = withRouter(CustomNavbar);
export default CustomNavbar;
