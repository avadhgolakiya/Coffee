import React from 'react'
import './Home.css'
import './MediaQurey.css';

const CardSec4 = ({text,givenName,img}) => {
  return (
    <div className='card4sec4' id="card4sec4">
                <div className='testimonial-block'>
                    <img src='https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd14bf7ce997bd0fd7a6a9_Quote.svg'/>

                    <p>{text}</p>
                    <h4 className='given-name'>{givenName}</h4>
                </div>
                <div className='image-sec-4-cards'>
                    <img src={img}  className='image-sec-4'/>
                </div>
      
    </div>
  )
}

export default CardSec4
