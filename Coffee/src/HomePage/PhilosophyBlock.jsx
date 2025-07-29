import React from 'react'
import './Home.css'
import './MediaQurey.css';
const PhilosophyBlock = ({link,heading,description}) => {
  return (
    <div className='block-1'>
      <div className='i-1-block-sec'>
            <img src={link} className='i-1-block'/>
            <h3 className='heading-block-1'>{heading}</h3>
            <p className='description-block-1'>{description}</p>
      </div>
    </div>
  )
}

export default PhilosophyBlock
