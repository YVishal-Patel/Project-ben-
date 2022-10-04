import React from 'react'
import './Team.css';

const TeamCard = ({name, des, img}) => {
  return (
    <>
    <div className="team-card-main-cont">
        <div className="team-card-img">
       <img src={img} alt="not found" width="130px" height="130px" />
       </div>
       <div className="team-card-data">
        <p className="team-card-data-head">{name}</p>
        <p className="team-card-data-desc">{des}</p>
       </div>
    </div>
    </>
  )
}

export default TeamCard