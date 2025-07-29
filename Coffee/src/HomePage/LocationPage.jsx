import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import './MediaQurey.css';
import LocationCompo from './LocationCompo';
import Footer from './Footer'
import Border from './Border';
import { motion, useScroll } from "motion/react"
const LocationPage = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div className='menuHeaderCompo'>
     <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#1e6e1a",
                }}
            />
             <Navbar />
             <div className='location-page-main'>
             <h1 className='location-text-at-location-page'>Locations</h1>
             <p className='nearest-location-page'>Find your nearest Brewhaus location.</p>
            <LocationCompo />
            <Footer />
            
      </div>
     
    </div>
  )
}

export default LocationPage
