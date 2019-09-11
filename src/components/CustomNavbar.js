import React from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


import logo from '../assets/logo_letras.png';

class CustomNavbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {

    return (
      <div>
        <nav className="navbar bg-dark-new navbar-expand-lg">
          <div className="container">
            <h1 className="logo js-scroll-trigger"> <a href="https://notes.sneakybaron.gg/">Sneaky<b className="text-blue-new">Notes</b></a></h1>
            <div>Powered by <a href="https://www.sneakybaron.gg"><img src={logo} width="200" className="" alt="Sb logo leters" /></a></div>
          </div>
        </nav>
        <nav className="navbar bg-semi-dark navbar-expand-lg">
          <div className="container">
            <div className="row links pt-3 align-self-start text-uppercase">
              <div className="col-auto"><Link className="text-light" to="/"><p>League of Legends</p></Link></div>
              <div className="col-auto"><Link className="text-light" to="/tft/"><p>Teamfight Tactics</p></Link></div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

CustomNavbar = withRouter(CustomNavbar);
export default CustomNavbar;
