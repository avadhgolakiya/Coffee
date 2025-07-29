import React from 'react'
import './Home.css'
import './MediaQurey.css';
import CardSec3 from './CardSec3';
import ButtonCompo from './ButtonCompo';
import { NavLink } from 'react-router-dom';
const ThirdPart = () => {
  let style = {
    textDecoration:"none",
  }
  return (
    <div className='third-sec'>
            <h1 className='third-sec-text'>  Loved by Locals</h1>
            <p className='local-text'>Local go-to’s everyone loves — handpicked and always fresh.</p>

            <div className='third-sec-cards-section'>
                      <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fcfffa690fa1c5625f9949_Latte.avif" title="Latte" price="$ 4.8"/>
                      <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd03d917528c381b23700c_Iced%20Tea.avif" title="Iced Tea" price="$ 4.35"/>
                      <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd01b440397f6137e3f9b9_Cold%20Brew.avif" title="Cold Brew" price="$ 6.75"/>
                      <CardSec3  src="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd05beb993a3a0bcef1685_Macaroon.avif" title="Macaroon" price="$ 2.6"/>
            </div>
            <NavLink to="/menu" style={style}><ButtonCompo title="Explore Menu"/></NavLink>
    </div>
  )
}

export default ThirdPart
