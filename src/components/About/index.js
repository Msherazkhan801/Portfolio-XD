import React from 'react'
import {Link} from 'react-router-dom'
import AboutImg from '../../assets/images/about.png'
export default function index() {
    return (
        <div className="about-section" id="about-section">
            <div className="container">
                <div className="about-wrapper">      
                    <div className="about-content">
                        <h2>About Me</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <Link className="btn-primary"  to="#about-section">
                            Download CV
                        </Link>
                    </div>
                    <div className="img-wrapper">
                        <img alt="image not working" id="about-img" src={AboutImg} />
                    </div>
                </div>        
            </div>
        </div>
    )
}
