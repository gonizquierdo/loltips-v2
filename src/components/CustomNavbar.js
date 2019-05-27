import React from 'react'
import { Link } from 'react-router-dom';

import { t } from '../i18n';

export default class CustomNavbar extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border">
         <Link to="/" className="navbar-brand display-4">LOLTIPS.GG</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
      </nav>
)
 }
}
