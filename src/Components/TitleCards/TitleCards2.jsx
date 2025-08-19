import React, { useRef} from 'react'
import './TitleCards2.css'
import Cards_Data2 from '../../assets/cards/Cards_Data2'
import { useEffect } from 'react';

const TitleCards2 = () => {
    
const  CardsRef = useRef();

const handleWheel= (event)  =>{
    event.preventDefualt();
    CardsRef.current.scrollLeft += eventdeltaY
}
useEffect(()=>{
    CardsRef.current.addEventListener("wheel",handleWheel);
}, [])

  return (
    <div className='Title-Cards2'>
        <h2>We think You"ll Love This</h2>
        <div className="Card-List2"ref ={CardsRef}>
            {
                Cards_Data2.map((card, index) =>{
                    return <div className="Card2" key={index}>
                    <img src={card.image} alt=""/>
                    <p>{card.name}</p></div>
                })
            }
        </div>
    </div>
  )
}

export default TitleCards2