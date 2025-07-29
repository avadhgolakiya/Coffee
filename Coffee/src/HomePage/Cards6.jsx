import React from 'react'
import './Home.css'
import './MediaQurey.css';
const Cards6 = ({link,time,description}) => {
  return (
    <div className='card-1-sec-six'>
            <img src={link} className='image-sec-6'/>
            <p className='sec-6-time'>{time}</p>
            <h3 className='sec-6-description'>{description}</h3>
    </div>
  )
}

export default Cards6
