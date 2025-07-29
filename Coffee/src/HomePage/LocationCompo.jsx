import React from 'react'
import './Home.css'
import './MediaQurey.css';
import AddressCompo from './AddressCompo';
import NeddHelpCompo from './NeddHelpCompo';
const LocationCompo = () => {
  return (
    <>
       <div className='location-info'>
            <div>
                <img src = "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd208d86446d8d3511bab4_Map%20Image.svg" className='map'/>
            </div>
            <div className='all-location-boxes'>
                <AddressCompo state="Brooklyn" mainLocation="123 Bedford Ave, Brooklyn, NY 11211" openingTime="Open daily: 7AM – 7PM"/>
                <AddressCompo state="Manhattan" mainLocation="456 Spring St, New York, NY 10012" openingTime="Open daily: 7AM – 8PM"/>
                <AddressCompo state="Queens" mainLocation="134-16 36th Road, Borad Way, NY 11354" openingTime="Open daily: 7AM – 6PM"/>
                <AddressCompo state="Queens" mainLocation="192-196 16th Road, Flushing, NY 11310" openingTime="Open daily: 8AM – 6PM"/>
            </div>
    </div>
        <NeddHelpCompo />
    </>
   
  )
}

export default LocationCompo
