import React from 'react'
import './Home.css';
import './MediaQurey.css';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <div className='header'>
        <div className='header-text'>
                <h1 className='life-begins'>Life Begins <br></br> After Coffee</h1>
                <p className='slogan'>Because great coffee is the start of something even greater.</p>
                <div className='btn-group'>
                <NavLink to="/menu" > <button className='btn-1'>Explore menu</button></NavLink>
                <NavLink to="/location">  <button className='btn-2'>Our Location</button></NavLink>
              
                </div>       
        </div>
        <div className='header-image-section'>
              <div className='middle-image'>
                    <img src='https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c56b860fe106f68269_Black%20Coffee.avif' className='i-1'/>
                    <img src='https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c56b860fe106f68269_Black%20Coffee.avif' className='i-2'/>
                    <img src='https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c56b860fe106f68269_Black%20Coffee.avif' className='i-3'/>

              </div>
        </div>
    </div>
  )
}

export default HeaderPage
