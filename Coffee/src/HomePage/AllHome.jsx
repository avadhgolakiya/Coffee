import React from 'react';
import Navbar from './Navbar';
import HeaderPage from './HeaderPage';
import Marquee from './Marquee';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import FourthSec from './FourthSec';
import FifthPart from './FifthPart';
import SixthSection from './SixthSection';
import Footer from './Footer';
import { motion, useScroll } from "motion/react"


const AllHome = () => {
  const { scrollYProgress } = useScroll()
  return <>
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
    <Navbar />
    <HeaderPage />
    {/* <Marquee /> */}
    <SecondPart />
    <ThirdPart />
    <FourthSec />
    <FifthPart />
    <SixthSection />
    <Footer />
  </>;
};

export default AllHome;
