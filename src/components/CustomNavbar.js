import React from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


import logo from '../assets/logo_letras.png'

class CustomNavbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {

    return (
      <div>
        <nav className="navbar bg-dark-new navbar-expand-lg">
          <div className="container">
            <h1 className="logo js-scroll-trigger"> Sneaky<b className="text-blue-new">Notes</b></h1>
            <div>Powered by <a href="https://www.sneakybaron.gg"><img src={logo} width="200" className="" alt="Sb logo leters" /></a></div>
          </div>
        </nav>
        <nav className="navbar bg-darker navbar-expand-lg">
          <div className="container">
            <div className="row links pt-1 align-self-start">
              <div className="col-auto"><Link to="/"><h5>League of Legends</h5></Link></div>
              <div className="col-auto"><Link to="/tft/"><h5>Teamfight Tactics</h5></Link></div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

CustomNavbar = withRouter(CustomNavbar);
export default CustomNavbar;
