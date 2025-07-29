import React from 'react'
import './Home.css'
import './MediaQurey.css';

const CardSec3 = ({src,title,price}) => {
  return (
    <div className='cardsec4'>
            <img src={src}  className='image-sec-3'/>
            <div className='card-3-deatils'>
                <span>{title}</span>
                <span>{price}</span>
            </div>
    </div>
  )
}

export default CardSec3
