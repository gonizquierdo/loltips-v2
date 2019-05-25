import React from 'react'
import { t } from '../i18n';

export default class CustomNavbar extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="#">LOL META TIPS</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
             <a className="nav-link" href="#">{t('navbar.home')}</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">{t("navbar.about_us")}</a>
           </li>

         </ul>
       </div>

       <div class="navbar-collapse collapse">
         <ul class="nav nav-pills nav-fill ml-auto">
            <li class="nav-item">
              <a class="nav-link bg-dark text-light" href="#">{t("navbar.subscribe")}</a>
            </li>
         </ul>
       </div>
      </nav>
)
 }
}

