import React from 'react'
import { motion } from 'framer-motion'
import gamer from '../../assets/images/gamer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>We put our <span>money</span> where our mouth is</h1>
            <p>Fortnite scirms, FIFA boiler rooms, and custom Warzone games</p>
            <motion.button whileHover={{boxShadow: '1rem 1rem 0 black', transition: {type: 'spring', stiffness: 560, damping: 20,}}} className='button'>Current Tournaments
                <FontAwesomeIcon style={{marginLeft: '1.5rem'}} icon={faArrowUpRightFromSquare} />
            </motion.button>
        </div>
        <div className="hero-img">
            <img src={gamer} alt="gamer" />
        </div>
    </div>
  )
}

export default Hero