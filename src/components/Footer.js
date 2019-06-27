import React from 'react'
import { t } from '../i18n.js'
import { NavLink, withRouter } from 'react-router-dom';

export default class Footer extends React.Component {


  render() {

    return (
      <footer class="page-footer font-small blue mt-4 container">
        <div class="bg-dark footer-copyright text-center py-3">© 2019 Copyright:
          <a href="https://www.sneakybaron.gg"> Sneakybaron.gg </a>
        </div>
      </footer>
    )
 }
}
