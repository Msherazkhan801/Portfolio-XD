import React from 'react'
import Card from '../CapabilitiesCard'
import stackImg from '../../assets/images/stack.png'
export default function index() {
    return (
        <div className="capabilities-section">
            <div className="container">
                <div className="section-title">
                    <h2>My Capabilities</h2>
                    <hr />
                    <p class="section-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className="cards-wrap">      
                    <Card  stackImg={stackImg} title="Web Design" text="Get awesome design services from inkyy.com " />  
                    <Card  stackImg={stackImg} title="Web Design" text="Get awesome design services from inkyy.com " />  
                    <Card  stackImg={stackImg} title="Web Design" text="Get awesome design services from inkyy.com " />  
                    <Card  stackImg={stackImg} title="Web Design" text="Get awesome design services from inkyy.com " />  
                    <Card  stackImg={stackImg} title="Web Design" text="Get awesome design services from inkyy.com " />  
                    <Card  stackImg={stackImg} title="Web Design" text="Get awesome design services from inkyy.com " /> 
                </div>  
            </div>           
        </div>
    )
}
