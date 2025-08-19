import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/title1.jpg'
import hero_title from '../../assets/Title2.png'
import  play_icon from  "../../assets/play_icon.png"
import info_icon from "../../assets/i.jpg"
import TitleCards from '../../Components/TitleCards/TitleCards'
import TitleCards1 from '../../Components/TitleCards/TitleCards1'
import TitleCards2 from '../../Components/TitleCards/TitleCards2'
import TitleCards3 from '../../Components/TitleCards/TitleCards3'
import TitleCards4 from '../../Components/TitleCards/TitleCards4'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className="banner-img" />
      <div className="hero-caption">
        <img src={hero_title} alt="" className="caption-img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore cum dolor. Voluptatum, eaque!
         Nihil est quaerat sunt. Labore numquam fugiat in rem quia dolor modi ipsam nulla dolorum voluptatem!</p>
     
        <div className="hero-btn">
           <button className='btn' onClick={() => window.open("https://www.youtube.com/watch?v=Ed1sGgHUo88", "_blank")}> <img src={play_icon} height={25} width={25} alt=""/>Play</button>
           <button className="btn dark-btn"><img src={info_icon} height={25} width={25} alt=""/>More Info</button>
        </div>
        <TitleCards/>
         </div>

        </div>

     <div className="more-cards">
        <TitleCards1/>
        <TitleCards2/>
        <TitleCards3/>
        <TitleCards4/>
     </div>
     <Footer/>
    </div>
  )
}

export default Home