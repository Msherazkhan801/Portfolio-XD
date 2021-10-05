import React from 'react'
import abad from '../../assets/images/abad.png'
import apri from '../../assets/images/apri.png'
import bane from '../../assets/images/bane.png'
import nalie from '../../assets/images/nalie.png'
import SedutPerspiciatis from '../../assets/images/SedutPerspiciatis.png'
import mob from '../../assets/images/mob.png'

const AllProtfolio = () => {
    return (
        <div className="tabContent">
            <div className="tabContentImage">
                <img alt="img not working" src={abad}/>
            </div>
            <div className="tabContentImage">
                <img alt="img not working" src={SedutPerspiciatis}/>
            </div>
            <div className="tabContentImage">
                <img alt="img not working" src={apri}/>
            </div>
            <div className="tabContentImage">
                <img alt="img not working" src={bane}/>
            </div>
            <div className="tabContentImage">
                <img alt="img not working" src={nalie}/>
            </div>
            <div className="tabContentImage">
                <img alt="img not working" src={mob}/>
            </div>
        </div>
    )
}

export default AllProtfolio
