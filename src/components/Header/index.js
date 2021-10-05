import React from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
export default function index() {
    return (
        <div className="header">
            <div className="container">
                <div className="nav-wrap">
                    <div className="logo">
                    <img src={logo} width="265px" />
                    </div>
                    <div className="header-nav">
                        <ul>
                            <li><Link id="about" to="#about-section">About</Link></li>
                            <li><Link id="portfolio" to="#portfolio">Portfolio</Link></li>
                            <li><Link id="contact" to="#contact">Contact</Link></li>
                            <li><Link id="get-started" to="#getstarted">Get Started</Link></li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    )
}
