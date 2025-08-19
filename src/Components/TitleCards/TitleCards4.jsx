import React, { useRef} from 'react'
import './TitleCards4.css'
import Cards_Data4 from '../../assets/cards/Cards_Data4'
import { useEffect } from 'react';

const TitleCards4 = () => {
    
const  CardsRef = useRef();

const handleWheel= (event)  =>{
    event.preventDefualt();
    CardsRef.current.scrollLeft += eventdeltaY
}
useEffect(()=>{
    CardsRef.current.addEventListener("wheel",handleWheel);
}, [])

  return (
    <div className='Title-Cards4'>
        <h2>Watch In One Weekend</h2>
        <div className="Card-List4"ref ={CardsRef}>
            {
                Cards_Data4.map((card, index) =>{
                    return <div className="Card4" key={index}>
                    <img src={card.image} alt=""/>
                    <p>{card.name}</p></div>
                })
            }
        </div>
    </div>
  )
}

export default TitleCards4