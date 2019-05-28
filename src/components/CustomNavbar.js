import React from 'react'
import { Link } from 'react-router-dom';

export default class CustomNavbar extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border">
         <Link to="/" className="navbar-brand display-4">LOLTIPS.GG</Link>
      </nav>
)
 }
}
