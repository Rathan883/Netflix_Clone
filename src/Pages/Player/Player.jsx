import React from 'react'
import "./Player.css" 

const Player = () => {
  return (
    <div className="Player">
        <img src={back_arrow_icon} alt="" />
        <iframe width= "90%" height= "90%" src ="lassName=" title="trailer" frameBorder= "0" allowFullScreen></iframe>
        <div className="Player-Info">
            <p>Published Date</p>
            <p>Name</p>
            <p>Type</p>
        </div>
    </div>
  )
}

export default Player