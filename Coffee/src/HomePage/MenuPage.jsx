import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import './MediaQurey.css';
import MenuHeaderCompo from './MenuHeaderCompo';
import CardSec3 from './CardSec3';
import Footer from './Footer'
import { motion, useScroll } from "motion/react"


const MenuPage = () => {
  let common = "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd01b440397f6137e3f9b9_Cold%20Brew.avif"
  let common2 = "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd04cbb5cedbf8a4bdc97f_Virgin%20Mojito.avif"
  const { scrollYProgress } = useScroll()
  return (
    
    <div className='menu-body'>
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
  <div className='menu-page'>
            <MenuHeaderCompo Header="Menu" text="Handcrafted drinks and fresh pastries." firstTitle="Our Location" secondTitle="Our News"/>

          <div className='coffe-section-menu'>
                <div className='like-border'></div>
                <h1 className='Coffee-text-menu'>Coffee</h1>

                <div className='cards-menu-section-inside-coffee-cards'>
                      <CardSec3  src={common} title="Cold Brew" price="$6.75"/>
                      <CardSec3  src={common} title="Macchiato" price="$6.1"/>
                      <CardSec3  src={common} title="Espresso" price="$4.25"/>
                      <CardSec3  src={common} title="Black Coffee" price="$4.9"/>
                      <CardSec3  src={common} title="Cappuccino" price="$5.25"/>
                      <CardSec3  src={common} title="Flat White" price="$5.5"/>
                      <CardSec3  src={common} title="Latte" price="$4.8"/>
                      <CardSec3  src={common} title="Mocha" price="$7.15"/>
                      <CardSec3  src={common} title="Americano" price="$5.3"/>
                </div>
                <div className='like-border'></div>
                <h1 className='Coffee-text-menu'>Cold Drinks</h1>
                <div  className='cards-menu-section-inside-coffee-cards'>
                <CardSec3  src={common2} title="Virgin Mojito" price="$6.2" />                
                <CardSec3  src={common2} title="Iced Latte" price="$6.2" />
                <CardSec3  src={common2} title="Iced Americano" price="$3.95" />
                <CardSec3  src={common2} title="Iced Mocha" price="$5.75" />
                <CardSec3  src={common2} title="Iced Tea" price="$4.35" />
                <CardSec3  src={common2} title="Bubble Tea" price="$6.75" />
                </div>
                <div className='like-border'></div>
                <h1 className='Coffee-text-menu'>Bakery</h1>
                <div  className='cards-menu-section-inside-coffee-cards'>
                <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd05e5c4e8544dae9d2bb2_Brownie.avif" title="Brownie" price="$2.15" />                
                <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd05beb993a3a0bcef1685_Macaroon.avif" title="Macaroon" price="$2.6" />
                <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd0596a73e259b444a33b1_Donut.avif" title="Donut" price="$1.4" />
                <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd056125cc1a257a6abad1_Maffin.avif" title="Muffin" price="$1.8" />
                <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd053599ec31dc3b175bca_Biscotti.avif" title="Biscotti" price="$1.5" />
                </div>
          </div>
          <Footer />
    </div>
    </div>
   
  )
}

export default MenuPage
