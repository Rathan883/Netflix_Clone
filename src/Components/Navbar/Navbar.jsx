import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import icon from "../../assets/logo.jpg"
import search_icon from "../../assets/Search.png"
import bell_icon from "../../assets/bell.png"
import profile_icon from "../../assets/profile.png"
import caret_icon from "../../assets/Caret.png"
import { logout } from "../../Firebase"

const Navbar = () => {

    const navRef = useRef();

    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add("nav-dark");
                }else
                {
                    navRef.current.classList.remove("nav-dark");
                
            }
        })
    },[])
  return (
    <div ref= {navRef} className='Navbar'>
       <div className="Navbar-left">
        <img src ={icon} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse  by languages</li>
        </ul>
       </div>

       <div className="Navbar-right">
        <img src = {search_icon} height={25} width={25} alt ="icons"/>
        <p>Children</p>
        <img src={bell_icon} alt="icons" />
        <div className="Navbar-profile">
            <img src = {profile_icon} height={25} width={25} alt="profile" />
            <img src={caret_icon} height={20} width={20} alt="" />

            <div className="drop-down">
                <p onClick={() => {logout()}}>Sign out of Netflix </p>
            </div>

        </div>
       </div>
    </div>
  )
}

export default Navbar