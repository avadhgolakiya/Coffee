import React from 'react'
import './Home.css'
import './MediaQurey.css';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
const MenuHeaderCompo = ({Header,text,firstTitle,secondTitle}) => {
  return (
    <div className='menuHeaderCompo'>
            <Navbar />
            <div className='main-div-menu-header'>
                <h1 className='menu-h-text'>{Header}</h1>
                <p className='lorem-header-menu'>{text}</p>
                <div className='btn-group'>
                   <NavLink to="/location"><button className='btn-1'>{firstTitle}</button></NavLink> 
                   <NavLink to="/news"><button className='btn-2'>{secondTitle}</button></NavLink> 
                </div>
            </div>
    </div>
  )
}

export default MenuHeaderCompo
