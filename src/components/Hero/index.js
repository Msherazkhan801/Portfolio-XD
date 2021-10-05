import React from 'react'
import HeroImg from '../../assets/images/hero-img.png'
import SocialIcons from '../../assets/images/social-icons.png'
import {Link} from 'react-router-dom'
import object1 from '../../assets/images/object1.png'
import object2 from '../../assets/images/object2.png'
import object3 from '../../assets/images/object3.png'
export default function Hero() {
    return (
        <div className="hero">
          <img alt="img not working" id="object1" src={object1} />
          <img alt="img not working" id="object2" src={object2} />
          <img alt="img not working" id="object3" src={object3} />
          <ul>
              <li className="selected">01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
          </ul>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-content">
                        <h2>Hello, I am</h2>
                        <h1>Mark Reccardo</h1>
                        <h4>A young <span>UI/UX</span> designer with crazy for mobile & web design.</h4>
                        <h3>Find Me on</h3>
                        <img alt="img not working" className="social-icons" src={SocialIcons}></img>
                        <div className="action-buttons">
                        <Link to="#" className="btn btn-secondary">
                            Hire Me
                        </Link>
                        <Link  to="#" className="btn btn-primary">
                            Portfolio 
                        </Link>
                    </div>
                    </div>
                    <div className="hero-img-wrap">
                        <img alt="img not working" src={HeroImg} ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
