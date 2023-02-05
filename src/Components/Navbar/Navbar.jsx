import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

export default function Navbar() {
  return (
<div className='hero_area'>
    <div className="header_section">
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>
              Maintenance
            </span>
          </Link>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"> About </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services"> Services </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
    </div>    
    </div>
</div>
  )
}
