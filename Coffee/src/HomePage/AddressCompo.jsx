import React from 'react'
import './Home.css'
import './MediaQurey.css';
import ButtonCompo from './ButtonCompo'
const AddressCompo = ({state,mainLocation,openingTime}) => {
  return (
    <div className='address-compo'>
            <h4 className='location-state'>{state}</h4>
            <h3 className='mainLocation'>{mainLocation}</h3>
            <h4 className='openingTime'>{openingTime}</h4>
            <button className='location-btn-sec-5'>Get Direction</button>
    </div>
  )
}

export default AddressCompo
