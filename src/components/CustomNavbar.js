import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/resources/logo.png'
export default class CustomNavbar extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border p-0">
        <Link to="/" className="navbar-brand display-4">
          <img src={logo} className="logo"/>
        </Link>
      </nav>
)
 }
}
