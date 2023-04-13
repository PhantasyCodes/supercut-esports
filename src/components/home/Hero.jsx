import React from 'react'
import { motion } from 'framer-motion'
import gamer from '../../assets/images/gamer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {

  const heroVariants = {
    initial : {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  const paragrapghVariants = {
    initial : {
      x: -1000,
    },

    animate: {
      x: 0,
      transition: {
        type: 'spring', 
        stiffness: 160, 
        damping: 40,
      }
    }
  }
  return (
    <div className='hero'>
        <div className="hero-text">
            <motion.h1 variants={heroVariants} animate="animate" initial="initial">We put our <span>money</span> where our mouth is</motion.h1>
            <motion.p variants={paragrapghVariants} initial="initial" animate="animate">Fortnite scirms, FIFA boiler rooms, and custom Warzone games</motion.p>
            <motion.button variants={heroVariants} animate="animate" initial="initial" whileHover={{boxShadow: '1rem 1rem 0 black', transition: {type: 'spring', stiffness: 560, damping: 20,}}} className='button'>Current Tournaments
                <FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} />
            </motion.button>
        </div>
        <div className="hero-img">
            <motion.img variants={heroVariants} initial="initial" animate="animate" src={gamer} alt="gamer" />
        </div>
    </div>
  )
}

export default Hero