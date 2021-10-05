import React, {useState} from 'react'
import mapImg from '../../assets/images/map.png'
import avatar1 from '../../assets/images/map1.png'
import avatar2 from '../../assets/images/map2.png'
import avatar3 from '../../assets/images/map3.png'
export default function ClientSays() {
    const [avatarData] = useState([
        {
            name:"Sara-Smith",
            para:"Sed Hello ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.",
            position: "CEO ABC Company"
        }
        ,
        {
            name:"Tara-Marie",
            para:"Sed Hi Thereut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.",
            position: "Project Manager"
        }
        ,
        {
            name:"Tony Stark",
            para:"Sed Heya .ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.",
            position: "Database Engineer"
        }
    ]
    )
    const [avatar,setAvatar] =useState({
        name:"Sara-Smith",
        para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.",
        position: "CEO ABC Company"
    })
    return (
        <div className="client-says">
            <div className="container">
                <div className="section-title">
                    <h2>What My Client Says</h2>
                    <hr />
                    <p class="section-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                </div>  
                <div className="map-wrap">
                    <div className="map-img">
                         <img alt="imgAlt" id="map" src={mapImg} />
                         <img alt="imgAlt" class="avatar" onClick={()=>setAvatar(avatarData[2])} id="avatar1" src={avatar1} />
                         <img alt="imgAlt" class="avatar" onClick={()=>setAvatar(avatarData[0])} id="avatar2" src={avatar2} />
                         <img alt="imgAlt" class="avatar" onClick={()=>setAvatar(avatarData[1])} id="avatar3" src={avatar3} />
                         <img alt="imgAlt" class="avatar" onClick={()=>setAvatar(avatarData[2])}  id="avatar11" src={avatar1} />
                         <img alt="imgAlt" class="avatar" onClick={()=>setAvatar(avatarData[0])} id="avatar21" src={avatar2} />
                         <img alt="imgAlt" class="avatar" onClick={()=>setAvatar(avatarData[1])}  id="avatar31" src={avatar3} />
                    </div>
                    <div className="map-content">
                        <p className="para">{avatar.para}</p>
                        <cite>- {avatar.name}</cite>
                        <h5 style={{fontWeight:"400"}}>{avatar.position}</h5>
                    </div>
                </div>

            </div>  
        </div>
    )
}
