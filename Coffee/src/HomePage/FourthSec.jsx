import React from 'react'
import './Home.css'
import './MediaQurey.css';
import CardSec4 from './CardSec4';
import ButtonCompo from './ButtonCompo';
import { NavLink } from 'react-router-dom';

const FourthSec = () => {
    let styles = {
        flexDirection: "column-reverse"
    }
    let style = {
        textDecoration:"none",
    }
  return (
    <div className='fourth-section'>
            <h1 className='what-people-love-text'>What People <br></br> Love About Us</h1>

            <div className='main-div-sec-4'>
                        <CardSec4  text="Brewhaus has spoiled other coffee shops for me – in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one." givenName="Patrick M. – Espresso lover" img="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1685088c8a7f976184b8_human-hand-pouring-milk-into-black-coffee-cafeteria.avif"/>
                        <CardSec4  text="I stop by every morning before work, and it’s the best part of my day. The iced latte is my go to, but I’ve honestly never had a bad drink here. Everything tastes handcrafted and full of care." givenName="Jordan T. – Iced latte addict" img="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1684d296363b2cefd962_milk-pouring-into-glass-with-coffee.avif"/>
                        <CardSec4  text="There's always a warm, welcoming vibe at the café perfect whether you're grabbing a quick coffee on the go, meeting with a friend, or settling in for a quiet read. And the banana bread? Absolutely delicious and totally addictive" givenName="Sofia R. – Coffee fan" img="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd168562e9f90985dc66ef_female-barista-with-apron-decorating-coffee-glass-with-milk.avif"/>
            </div>
            <NavLink to="/location" style={style}><ButtonCompo title="Our Location"/></NavLink>
           
    </div>
  )
}

export default FourthSec
