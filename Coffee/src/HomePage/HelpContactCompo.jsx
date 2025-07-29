import React from 'react'
import './Home.css'
import './MediaQurey.css';
const HelpContactCompo = ({title, contact}) => {
  return (
    <div className='helpDeatils'>
        <h4 className='helpDeatils-name'>{title}</h4>
        <h3 className='contact-details-sec-5'>{contact}</h3>
    </div>
  )
}

export default HelpContactCompo
