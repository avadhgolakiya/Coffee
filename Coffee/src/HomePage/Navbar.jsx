import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import './MediaQurey.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className='middle-nav'>
          <NavLink to="/home" className="nav-res-icon">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg"
              className="logo-symbol"
              alt="Logo"
            />
          </NavLink>

          <ul className={`ul-nav ${toggle ? 'mobile-show' : ''}`}>
            <NavLink to="/menu" className="nav-text">Menu</NavLink>
            <NavLink to="/location" className="nav-text">Location</NavLink>
            <NavLink to="/home" className="nav-image">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg"
                className="logo-symbol"
                alt="Logo"
              />
            </NavLink>
            <NavLink to="/about" className="nav-text">About Us</NavLink>
            <NavLink to="/news" className="nav-text">News</NavLink>
          </ul>

          <div className='menu-padding'>
            <button onClick={toggleHandler} className="menu-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" viewBox="0 0 256 256">
                <g fill="#1d4e1a"><g transform="scale(10.67)"><path d="M3,5h18c.36,0,.7-.18,.88-.5s.18-.7,0-1s-.52-.5-.88-.5H3c-.36,0-.7.18-.88.5s-.18.7,0,1s.52.5.88.5Zm0,6h18c.36,0,.7-.18,.88-.5s.18-.7,0-1s-.52-.5-.88-.5H3c-.36,0-.7.18-.88.5s-.18.7,0,1s.52.5.88.5Zm0,6h18c.36,0,.7-.18,.88-.5s.18-.7,0-1s-.52-.5-.88-.5H3c-.36,0-.7.18-.88.5s-.18.7,0,1s.52.5.88.5Z"/></g></g>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
