import React, {useState} from 'react'
import arrowLeft from '../../assets/images/arrowLeft.png'
import arrowRight from '../../assets/images/arrowRight.png'
import AllProtfolio from './AllProtfolio'
import LogoPortfolio from './LogoPortfolio'
import WebsitePortfolio from './WebsitePortfolio'
import MobliePortfolio from './MobliePortfolio'

const Portfolio = () => {

    const [showTab, setShowTab] = useState("all")

    const onClickAll = () =>{
        setShowTab('all')
    }
    const onClickLogo = () =>{
        setShowTab('logo')
    }
    const onClickWebsite = () =>{
        setShowTab('website')
    }
    const onClickMob = () =>{
        setShowTab('mob')
    }

    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolioWrap">
                    <div className="portfolioHeading">
                        <h4 className="portfolioHeading">Portfolio</h4>
                        <span className="lineSpan"></span>
                        <div className="buttonImage">
                            <img alt="img not working" src={arrowLeft}/>
                            <img alt="img not working" src={arrowRight}/>
                        </div>
                    </div>
                    <div className="tabs">
                        <button className="tabLinks" 
                            onClick={() => {onClickAll()}}>All</button>
                        <button className="tabLinks" 
                            onClick={() => {onClickLogo()}}>Logo</button>
                        <button className="tabLinks" 
                            onClick={() => {onClickWebsite()}}>Websites</button>
                        <button className="tabLinks" 
                            onClick={() => {onClickMob()}}>Mobile Apps</button>
                    </div>
                    <div>
                        {
                           ( ()=>{
                                if(showTab==='all'){
                                    return <AllProtfolio/>
                                }
                                else if(showTab==='logo'){
                                    return <LogoPortfolio/>
                                }else if(showTab==='website'){
                                    return <WebsitePortfolio/>
                                }else if(showTab==='mob'){
                                    return <MobliePortfolio/>
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio