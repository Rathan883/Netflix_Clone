import React, { useRef} from 'react'
import './TitleCards3.css'
import Cards_Data3 from '../../assets/cards/Cards_Data3'
import { useEffect } from 'react';

const TitleCards3 = () => {
    
const  CardsRef = useRef();

const handleWheel= (event)  =>{
    event.preventDefualt();
    CardsRef.current.scrollLeft += eventdeltaY
}
useEffect(()=>{
    CardsRef.current.addEventListener("wheel",handleWheel);
}, [])

  return (
    <div className='Title-Cards3'>
        <h2>Your Next Watch</h2>
        <div className="Card-List3"ref ={CardsRef}>
            {
                Cards_Data3.map((card, index) =>{
                    return <div className="Card3" key={index}>
                    <img src={card.image} alt=""/>
                    <p>{card.name}</p></div>
                })
            }
        </div>
    </div>
  )
}

export default TitleCards3