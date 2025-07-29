import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import './MediaQurey.css';
import Cards6 from './Cards6';
import Footer from './Footer';
import { motion, useScroll } from "motion/react"

const NewsPage = () => {
  const { scrollYProgress } = useScroll()
  return (
    
    <div className='main-news-page'>
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
        <Navbar/>
        <div className='header-news-sec'>
              <h1 className='news-page-text-news'>News</h1>  
              <p className='fresh-annoucement'>Fresh updates and announcements.</p>
        </div>

        <div className='card-news-section'>
                <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2c01b922ecb44ec95c62_women-taking-coffee-with-friends.avif" time="Apr 10, 2025" description="Celebrate the Season with Our New Spring Drink Specials Today"/> 
                <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2bb8c052eb4377b88f96_coffee-shop-small-business.avif" time="Apr 2, 2025" description="Our New Brewhaus Flushing Location Is Now Officially Open"/>   
                <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2b6a5cba4683a18d9a2a_coffee-making-items-indoors.avif" time="Mar 23, 2025" description="Introducing Our Exciting New Loyalty Program for Coffee Lovers"/>     
                <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2b2597a1275279418941_portrait-handsome-blond-man-cafe-sits-chair-enjoys-taste-delicious-freshly-brewed.avif" time="Mar 6, 2025" description="We're Now Available on DoorDash and Uber Eats for Easy Ordering!"/> 
                <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2adef293d0f43cec1f93_smiling-waitress-serving-order.avif" time="Feb 18, 2025" description="Brewhaus Proudly Celebrates 2 Years Serving Brooklyn"/>   
                <Cards6 link="https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2a99bad71b76dd17d017_tanned-woman-sits-cafe-poses-cup-matcha-green-tea-with-milk.avif" time="Feb 3, 2025" description="Your Favorite Syrups Are Now Available Sugar-Free in All Drinks"/>           
        </div>
        <Footer />

    </div>
  )
}

export default NewsPage
