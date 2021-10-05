import React from 'react'
import apri from '../../assets/images/apri.png'
import bane from '../../assets/images/bane.png'

const WebsitePortfolio = () => {
    return (
        <div className="tabContentWeb">
            <div className="tabContentImage">
                <img alt="imgalt" src={apri}/>
            </div>
            <div className="tabContentImage">
                <img alt="imgalt" src={bane}/>
            </div>
        </div>
    )
}

export default WebsitePortfolio
