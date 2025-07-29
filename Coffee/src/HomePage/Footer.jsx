import React from 'react'
import './Home.css'
import './MediaQurey.css';
import { NavLink } from 'react-router-dom';
import IconsCompo from './IconsCompo';
const Footer = () => {
  return (
    <footer>
    <div className='middle-footer'>
        <div className='footer-1'> 
            <div>

               <NavLink to="/homepage"  className='nav-image'> <img src='https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg'  className='logo-symbol'/></NavLink>  
               <div className='footer-life'>Life Begins <br></br> After Coffee</div>  

               <div className='footer-calling-info-box'>
                        <div className='footer-call'>
                            <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe0dd63148318dfb47d40b_Phone.svg" className='i-footer'/>
                            <span>+1 (212) 555-0198</span>
                        </div>
                        <div className='footer-call'>
                            <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe0dd78fa2aa6edfd627d9_Envelope.svg" className='i-footer'/>
                            <span>hello@bhaus.com</span>
                        </div>     
               </div>
            </div>
            <div className='main-footer-part'>
                            <div>
                                <p className='main-footer-text'>Main</p>
                                <NavLink to="/menu" className="navLink"><p className='footer-main-texts'>Menu</p></NavLink>
                                <NavLink to="/location" className="navLink"><p className='footer-main-texts'>Location</p></NavLink>
                                <NavLink to="/about" className="navLink"><p className='footer-main-texts'>About Us</p> </NavLink>
                                <NavLink to="/news" className="navLink"><p className='footer-main-texts'>News</p></NavLink>
                            </div>
                            <div>
                            <p className='main-footer-text'>Categories</p>
                            <p className='footer-main-texts'>Coffee</p>
                            <p className='footer-main-texts'>Cold Drinks</p>
                            <p className='footer-main-texts'>Bakery</p>
                            </div>
                            <div>
                            <p className='main-footer-text'>Follow Us</p>
                            <div className='icons-compo-footer'>
                                        <IconsCompo link="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe112d8fa2aa6edfd8e2c8_Instagram.svg" />
                                        <IconsCompo link="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe112d61b39022f919ac53_Facebook.svg" />
                                        <IconsCompo link="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe112d2480b26f259262ed_Twitter%20(X).svg" />
                            </div>
                            </div>
               </div>
        </div>
        <div className='footer-webapp-name'>
            <img src='https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe11bb7bf134f3853dca21_Brewhaus.svg'  className='footer-last-image'/>
        </div>
    </div>
    </footer>
  )
}

export default Footer
