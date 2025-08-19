import React, { useRef} from 'react'
import './TitleCards.css'
import Cards_Data from '../../assets/cards/Cards_Data'
import { useEffect } from 'react';

const TitleCards = () => {
    
const  CardsRef = useRef();

const handleWheel= (event)  =>{
    event.preventDefualt();
    CardsRef.current.scrollLeft += eventdeltaY
}
useEffect(()=>{
    CardsRef.current.addEventListener("wheel",handleWheel);
}, [])

  return (
    <div className='Title-Cards'>
        <h2>Popular On Netflix</h2>
        <div className="Card-List"ref ={CardsRef}>
            {
                Cards_Data.map((card, index) =>{
                    return <div className="Card" key={index}>
                    <img src={card.image} alt=""/>
                    <p>{card.name}</p></div>
                })
            }
        </div>
    </div>
  )
}

export default TitleCards