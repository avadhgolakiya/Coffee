import React from 'react'
import './MediaQurey.css';
const CardSec2 = ({src,title}) => {
  return (
    <div className='sec2Card'>
        <img src={src} className='i-1-sec-2'/>

        <h1 className='sec-2-title'>{title}</h1>
    </div>
  )
}

export default CardSec2
