import React from 'react'
import logo from '../../assets/images/logo.png'
import socialIcons from '../../assets/images/social-icons.png'
const index = () => {
    return (
        <footer>
                <div className="footer-wrap">
                    <img alt="image not working" src={logo}/>
                </div>
                <div className="footerPara">
                    <p class="footer-links">About | Portfolio | Contact</p>
                    <p>NY / +1 123456 7890 / hello@graphics.studio.com</p>
                    <div className="socialMedia">
                        <img alt="image not working" src={socialIcons} />
                    </div>
                    <hr/>
                </div>
            <div className="copyright">
                <p>Copyright &copy; 2019 Graphics Studio | All rights reserved</p>
            </div>
        </footer>
    )
}

export default index
