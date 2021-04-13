import React from 'react'
import logo from '../logo.png';

//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  return (
  <HashRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
      <a className="navbar-brand" href="#">
        <img className="logo" src={logo} alt="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink  className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/about-me">about me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/services">services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/how-work">how i work</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/portfolio">portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/contacts">contacts</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </HashRouter>
  )
}

export default Navbar
