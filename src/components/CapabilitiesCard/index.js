import React from 'react'

export default function index({stackImg, title, text}) {
    return (
        <div className="capabilities-card">
            <div className="card-inner">
                <img alt="image not working" src={stackImg} width="106" />
                <h4 style={{fontSize:'35px'}}>{title}</h4>
                <h5 >{text}</h5>
            </div>    
        </div>
    )
}
