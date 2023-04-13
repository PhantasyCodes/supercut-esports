import React from 'react'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'
import './Home.css'
import Hero from '../components/home/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import GameCarousel from '../components/home/GameCarousel'

const marqueeVariants = {
  animate: {
    y: [1000, -600],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
}

const Home = () => {
  return (
    <div>
      <Nav />
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay: 2}}} className="news">
        <motion.h2 variants={marqueeVariants}
          animate="animate" >monthly tournaments are now live! sign up now!
        </motion.h2>
      </motion.div>
      <Parallax pages={2}>
        <ParallaxLayer speed={1}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.4}>
          <GameCarousel />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Home