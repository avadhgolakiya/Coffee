import React from 'react'
import './Home.css'
import './MediaQurey.css';
import LocationCompo from './LocationCompo';
const FifthPart = () => {
  return (
    <div className='section-5'>
            <h1 className='nearby-cafe'>Nearby Cafés</h1>
            <p className='lorem-1-sec-5'>Find a Brewhaus nearby and stop in for your favorite drink.</p>  
            <div>
                <LocationCompo />
            </div>
    </div>
  )
}

export default FifthPart
