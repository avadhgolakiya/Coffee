import React from 'react'
import { motion, useScroll } from "motion/react"
import Navbar from './Navbar'
import MenuHeaderCompo from './MenuHeaderCompo'
import PhilosophyBlock from './PhilosophyBlock'
import Footer from './Footer'
const Aboutpage = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div className='about-us-page-designing'>
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
            <MenuHeaderCompo Header="About Us" text="Learn who we are and what we brew for." firstTitle="Our Location" secondTitle="Our News"/>
            <div className='about-page-body'>

                    <div className='logo-image-at-about-page'>
                            <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe717c5669625118da4d6f_Symbol.svg" className='logo-at-ab-page'/>
                    </div>
                    <h2 className='about-brehaus-text'>Brewhaus is where flavor meets craft. From bean to cup, we focus on quality, speed, and simplicity – perfect for busy mornings or laid-back afternoons.</h2>


                    <div className='main-sec-at-about-us'>
                                <div className='about-page-card-1'>
                                        <div className='i-1-ab-page-c-1'>
                                                <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe7295510f4f9e62c52d5b_Heart.svg" width={40} height={40}/>
                                        </div>
                                        <div className='middle-card-at-ab-page'>
                                                <h3 className='count'>10K+</h3>
                                                <h3 className='hp-cusomers-text'>Happy Customers</h3>
                                        </div>
                                        <div className='i-2-ab-page-c-1'>
                                                <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe72956adf93d1d4cb870d_Sweat%20Waterdrop.svg" width={40} height={40} />
                                        </div>
                                </div>
                                <div className='c-2-ab-page'>
                                        <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe749f469ae823c69d154d_latte-black-coffee-milk-espresso-cinnamon-milk-foam-side-view.avif" className='i-2-c-2-ab-page'/>
                                </div>
                                <div className='about-page-card-1'>
                                <div className='i-1-ab-page-c-1'>
                                                <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe75b6916643c7660952ca_Home.svg" width={40} height={40}/>
                                        </div>
                                        <div className='middle-card-at-ab-page'>
                                                <h3 className='count'>4</h3>
                                                <h3 className='hp-cusomers-text'>Cafes</h3>
                                        </div>
                                        <div className='i-2-ab-page-c-1'>
                                                <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe75b5bfd4477cf22a5034_Bolt.svg" width={40} height={40}/>
                                        </div>
                                </div>
                                
                    </div>
                <div className='text-sec-ab-1'>
                <h1 className='the-heart-text-ab'>The Heart <br></br> of Brewhaus</h1>

                <div className='block-sec-at-ab-page'>
                        <PhilosophyBlock link="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe78a0f50c40d444f4435c_Hand.svg" heading="Quality First" description="We never compromise on flavor or freshness." />
                        <PhilosophyBlock link="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd229c48735660b163_Smiley%20Love.svg" heading="Warm Hospitality" description="Everyone is welcome here, no matter the reason or time." />
                        <PhilosophyBlock link="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe78a0bbdb744a9e957e93_Asterisk.svg" heading="Sustainability" description="Ethically sourced beans and eco-conscious choices." />
                </div>
            </div>
            </div>
            <Footer />
    </div>
  )
}

export default Aboutpage
