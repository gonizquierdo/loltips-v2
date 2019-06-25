import React from 'react'
import { Link } from 'react-router-dom';
export default class CustomNavbar extends React.Component {

  render() {

    return (
      <div className="bg-light nav navbar navbar-fixed-top">
        <Link className="text-dark lead" to="/">
          SNEAKYBARON.GG LOGO
        </Link>
      </div>
)
 }
}
