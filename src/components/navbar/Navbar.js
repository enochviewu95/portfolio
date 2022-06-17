/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css';
import logo from '../../assets/icons/logo.png'
import logo_white from '../../assets/icons/logo-white.png'

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className='float-start' src={logo_white} alt="page logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <button className="btn btn-outline-success">LET'S TALK</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar