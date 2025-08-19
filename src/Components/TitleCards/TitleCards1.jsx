import React, { useRef} from 'react'
import './TitleCards1.css'
import Cards_Data1 from '../../assets/cards/Cards_Data1'
import { useEffect } from 'react';

const TitleCards1 = () => {
    
const  CardsRef = useRef();

const handleWheel= (event)  =>{
    event.preventDefualt();
    CardsRef.current.scrollLeft += eventdeltaY
}
useEffect(()=>{
    CardsRef.current.addEventListener("wheel",handleWheel);
}, [])

  return (
    <div className='Title-Cards1'>
        <h2>Only On Netflix</h2>
        <div className="Card-List1"ref ={CardsRef}>
            {
                Cards_Data1.map((card, index) =>{
                    return <div className="Card1" key={index}>
                    <img src={card.image} alt=""/>
                    <p>{card.name}</p></div>
                })
            }
        </div>
    </div>
  )
}

export default TitleCards1