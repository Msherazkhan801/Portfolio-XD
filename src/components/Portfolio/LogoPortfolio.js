import React from 'react'
import abad from '../../assets/images/abad.png'
import SedutPerspiciatis from '../../assets/images/SedutPerspiciatis.png'


const LogoPortfolio = () => {
    return (
        <div className="tabContentLogo">
            <div className="tabContentImage">
                <img alt="img not working" src={abad}/>
            </div>
            <div className="tabContentImage">
                <img alt="img not working" src={SedutPerspiciatis}/>
            </div>
        </div>
    )
}

export default LogoPortfolio
