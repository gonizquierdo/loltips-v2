import React from 'react'
import { Link } from 'react-router-dom';

import { t } from '../i18n';

export default class CustomNavbar extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link to="/" className="navbar-brand">LOL META TIPS</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
             <Link to="/" className="nav-link" href="#">{t('navbar.home')}</Link>
           </li>
           <li className="nav-item">
             <Link to="/about_us" className="nav-link" href="#">{t("navbar.about_us")}</Link>
           </li>

         </ul>
       </div>

       <div className="navbar-collapse collapse">
         <ul className="nav nav-pills nav-fill ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link bg-dark text-light" >{t("navbar.subscribe")}</Link>
            </li>
         </ul>
       </div>
      </nav>
)
 }
}
