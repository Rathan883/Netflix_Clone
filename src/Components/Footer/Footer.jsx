import React from 'react'
import './Footer.css'
import facebook_icon from "../../assets/facebook.jpg"
import instagram_icon from "../../assets/Instagram.jpg"
import utube_icon from "../../assets/U-Tube.jpg" 
import twitter_icon from "../../assets/twitter.jpg"
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Footer-icons">
            <img src={facebook_icon} alt=""/>
            <img src={instagram_icon} alt=""  />
             <img src={utube_icon} alt="" />
             <img src={twitter_icon} alt="" />
        </div>

        <ul>
            <li>Audio Description</li>
            <li>Help center</li>
            <li>Gift cards</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms Of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>

        </ul>
        <p className="copyright-text">© 1993-2025 Netflix, Inc</p>
    </div>
  )
}

export default Footer