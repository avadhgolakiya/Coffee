import React from 'react'
import './Home.css'
import './MediaQurey.css';
import Cards6 from './Cards6';
const SixthSection = () => {
  return (
    <div className='six-section'>
        <h1 className='Our-Coffe-Store'>What’s New at <br></br> Our Coffee Shop</h1>

        <div className='Six-section-cars'> 
        <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2c01b922ecb44ec95c62_women-taking-coffee-with-friends.avif" time="Apr 10, 2025" description="Celebrate the Season with Our New Spring Drink Specials Today"/>
        <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2bb8c052eb4377b88f96_coffee-shop-small-business.avif" time="Apr 2, 2025" description="Our New Brewhaus Flushing Location Is Now Officially Open"/>
        <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2b6a5cba4683a18d9a2a_coffee-making-items-indoors.avif" time="Mar 23, 2025" description="Introducing Our Exciting New Loyalty Program for Coffee Lovers"/>
        </div>
    </div>
  )
}

export default SixthSection
